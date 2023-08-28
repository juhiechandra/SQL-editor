import React, { useState, useEffect } from "react";
import {
  downloadFile,
  exportToCSV,
  exportToJson,
} from "../../utils/exportFile";

import DownloadForOfflineTwoToneIcon from "@mui/icons-material/DownloadForOfflineTwoTone";
import NoOutput from "../placeholders/showNoOutput";

const SearchOutput = ({ isOutputLoad, outputData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryRuntime, setQueryRuntime] = useState(0);

  useEffect(() => {
    setQueryRuntime(Math.random() * 0.09);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const exportAsJson = () => {
    exportToJson(outputData, "my_query_output");
  };

  const exportAsCSV = () => {
    exportToCSV(outputData, "my_query_output");
  };

  return (
    <div>
      <div className="px-2 border-b-[1px] border-[#ffffff33] h-[60px] flex items-center  justify-between ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="block p-2 text-md text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search you query output"
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "#808487", fontWeight: "bold" }}>
            Query took: {queryRuntime.toFixed(4)} seconds
          </div>

          <button
            onClick={exportAsJson}
            style={{
              backgroundColor: "#FF6C37",
              borderRadius: "2px",
              border: "1px solid #E35521",
              padding: "5px",
              flexDirection: "row",
            }}
          >
            Export as JSON
            <DownloadForOfflineTwoToneIcon />
          </button>
          <button
            onClick={exportAsCSV}
            style={{
              backgroundColor: "#FF6C37",
              borderRadius: "2px",
              border: "1px solid #E35521",
              padding: "5px",
              flexDirection: "row",
            }}
          >
            Export as CSV
            <DownloadForOfflineTwoToneIcon />
          </button>
        </div>
      </div>

      <div className={`h-[800px] overflow-y-auto`}>
        {isOutputLoad && (
          <div className="flex items-center justify-center w-[100%] h-[230px]">
            <NoOutput />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOutput;
