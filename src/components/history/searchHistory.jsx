import React, { memo, useCallback, useEffect, useState } from "react";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";

const SearchHistory = memo(
  ({
    history,
    setHistory,
    hideSearchHistory,
    setHideSearchHistory,
    setQuery,
    fullScreen,
  }) => {
    const [isNoHistory, setNoHistory] = useState(false);

    const toggleBar = useCallback(() => {
      setHideSearchHistory(!hideSearchHistory);
    }, [hideSearchHistory, setHideSearchHistory]);

    const handleClearHistory = useCallback(() => {
      const confirmUser = window.confirm("Delete the whole search history?");
      if (confirmUser) {
        setHistory("");
        localStorage.removeItem("history");
      }
    }, [setHistory]);

    useEffect(() => {
      setHideSearchHistory(fullScreen);
    }, [fullScreen]);

    useEffect(() => {
      const foundHistory = localStorage.getItem("history");
      if (foundHistory) {
        const savedHistory = JSON.parse(foundHistory).items;
        setHistory(savedHistory);
        setNoHistory(savedHistory.length === 0);
      } else {
        setNoHistory(true);
      }
    }, [setHistory]);

    return (
      <div
        className={`pb-4 relative ${
          hideSearchHistory ? "w-[50px] p-4" : "flex-[0.20]"
        } hidden md:block`}
        style={{ backgroundColor: "#2C3137" }}
      >
        <button
          className={`absolute p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[2px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[40px] h-[40px] flex justify-center items-center z-20 left-[-10px] top-[15px] outline-none`}
          onClick={() => toggleBar()}
        >
          {hideSearchHistory ? (
            <HistoryTwoToneIcon />
          ) : (
            <HighlightOffTwoToneIcon style={{ transform: "scaleX(-1)" }} />
          )}
        </button>

        <div className={`${hideSearchHistory ? "hidden" : "block"}`}>
          <div className="pl-5 border-b-[1px] border-[#ffffff33] h-[80px] flex items-center justify-between">
            <div className="flex-grow" />
            <button
              className={`p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[2px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[40px] h-[40px] outline-none`}
              onClick={() => handleClearHistory()}
            >
              <DeleteSweepTwoToneIcon />
            </button>
          </div>
          <div className="overflow-y-scroll h-[90vh]">
            {isNoHistory ? (
              <div className="flex items-center justify-center mt-5">
                <p className="text-center text-slate-400">
                  Please run a query to save history
                </p>
              </div>
            ) : (
              history &&
              history.map((queryinput) => (
                <div
                  key={queryinput}
                  className="bg-[#014A92] clamp-1 m-2 p-2 rounded-[2px] overflow-hidden text-lg cursor-pointer flex items-center"
                  onClick={() => setQuery(queryinput)}
                >
                  <p
                    className="line-clamp-1 text-base"
                    style={{ fontWeight: "bold" }}
                  >
                    {queryinput}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default SearchHistory;
