import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data, visitHandler, pinUrl }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.slug}>
          <td className="pl-6 py-4 text-center cursor-pointer whitespace-no-wrap bg-gray-100">
            <i
              className={classnames(
                "transition duration-300 ease-in-out hover:text-purple-500 text-bb-border text-2xl",
                {
                  "ri-pushpin-2-line": rowData.status !== "starred",
                },
                {
                  "ri-pushpin-2-fill text-purple-500":
                    rowData.status === "starred",
                }
              )}
              onClick={() => pinUrl(rowData.slug, rowData.status)}
            ></i>
          </td>
          <td className="px-6 py-4 text-sm font-medium leading-5">
            <a
              href={data.original_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.original_url}
            </a>
          </td>
          <td
            className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs cursor-pointer"
            onClick={() => visitHandler(data.short_url)}
          >
            {data.short_url}
          </td>
          <td className="px-3 py-4 text-sm text-center font-medium leading-5 whitespace-no-wrap bg-gray-100">
            {data.click_count}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
