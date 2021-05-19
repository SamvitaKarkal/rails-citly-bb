import React, { useState, useEffect } from "react";
import Container from "components/Container";
import Table from "components/URLs/Table/index";
import CreateUrl from "components/URLs/CreateUrl";
import PageLoader from "components/PageLoader";
import urlsApi from "apis/urls";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  // for creating short url links
  const [newUrl, setNewUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const createUrl = async () => {
    try {
      setLoading(true);
      await urlsApi.create({ newUrl: { original_url: newUrl } });
      setNewUrl("");
      Toastr.success("Shortened URL created!");
      fetchUrls();
    } catch (error) {
      logger.error(error);
    }
  };

  const visitHandler = visit => {
    setTimeout(() => {
      fetchUrls();
    }, 1000);
    window.open(visit, "_blank");
  };

  const pinUrl = async (slug, status) => {
    try {
      const toggledStatus = status === "pinned" ? "unpinned" : "pinned";
      await urlsApi.update({
        slug,
        payload: { newUrl: { status: toggledStatus } },
      });
      await fetchUrls();
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <div>
        <CreateUrl
          url={newUrl}
          setUrl={setNewUrl}
          createUrl={createUrl}
          loading={loading}
        />
      </div>
      {either(isNil, isEmpty)(urls) ? (
        <h1 className="text-xl leading-5 text-center mt-4">
          No Short URLs created yet. Create new one now!
        </h1>
      ) : (
        <Table data={urls} visitHandler={visitHandler} pinUrl={pinUrl} />
      )}
    </Container>
  );
};

export default Dashboard;
