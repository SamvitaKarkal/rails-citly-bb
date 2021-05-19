import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { initializeLogger } from "./common/logger";

import Dashboard from "components/Dashboard";
import PageLoader from "components/PageLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
