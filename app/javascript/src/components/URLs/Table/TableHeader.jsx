import React from "react";

const TableHeader = () => {
  return (
    <thead className="bg-purple-600">
      <tr>
        <th className="w-1 bg-gray-50"></th>
        <th className="px-6 py-3 text-xs font-bold leading-4 tracking-wider text-left text-bb-gray-600 uppercase text-white">
          Original
        </th>
        <th className="px-6 py-3 text-xs font-bold leading-4 tracking-wider text-left text-bb-gray-600 uppercase text-white">
          Short URL
        </th>
        <th className="w-1 bg-gray-50"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
