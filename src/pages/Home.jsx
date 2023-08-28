import React, { useCallback, useEffect, useState } from "react";
import {
  CodeEditor,
  SearchOutput,
  AvailableData,
  HomeNavbar,
  SearchHistory,
} from "../components";
import useDataFetcher from "/src/hooks/useDataFetcher.js";

function Home() {
  const [isOutputLoad, setOutputLoad] = useState(false);
  const [outputData, setOutputData] = useState();
  const [executedQuery, setExecutedQuery] = useState("SELECT * FROM Customer;");
  const [query, setQuery] = useState("SELECT * FROM Customer;");
  const [SearchOutputTerminal, setSearchOutputTerminal] = useState(false);
  const [history, setHistory] = useState([]);
  const [fullScreen, setFullScreen] = useState(false);
  const [hideSearchHistory, setHideSearchHistory] = useState(true);
  const [hideTableSearchHistory, setHideTableSearchHistory] = useState(false);
  const { data, isLoading } = useDataFetcher(executedQuery);

  const handleSubmit = useCallback(() => {
    setSearchOutputTerminal(true);
    setExecutedQuery(query);
    setHistory([...history, query]);
    localStorage.setItem(
      "history",
      JSON.stringify({ items: [...history, query] })
    );
  }, [query]);

  useEffect(() => {
    setOutputData(data);
    setOutputLoad(isLoading);
  }, [data, isLoading]);

  // file importer handler
  const handleFileImport = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        setQuery(content);
      };
      reader.readAsText(file);
    }
  }, []);

  useEffect(() => {
    setSearchOutputTerminal(false);
    setHideSearchHistory(true);
  }, []);

  return (
    <div className="block md:flex item-center justify-between h-[100vh] w-[100vw] overflow-hidden bg-[#2C3137] text-[white]">
      <AvailableData
        hideTableSearchHistory={hideTableSearchHistory}
        setHideTableSearchHistory={setHideTableSearchHistory}
        setQuery={setQuery}
        fullScreen={fullScreen}
      />

      <div
        className={`w-full border-x-[1px] border-[#00000033] ${
          hideSearchHistory && hideTableSearchHistory
            ? "flex-[0.95]"
            : hideSearchHistory || hideTableSearchHistory
            ? "flex-[0.8]"
            : "flex-[0.60]"
        } overflow-x-scroll h-[100vh] overflow-y-hidden`}
      >
        <HomeNavbar
          handleSubmit={handleSubmit}
          handleFileImport={handleFileImport}
          query={query}
          setQuery={setQuery}
          setFullScreen={setFullScreen}
          fullScreen={fullScreen}
        />
        <CodeEditor
          setQuery={setQuery}
          query={query}
          SearchOutputTerminal={SearchOutputTerminal}
          fullScreen={fullScreen}
        />
        <SearchOutput
          hideTableSearchHistory={hideTableSearchHistory}
          hideSearchHistory={hideSearchHistory}
          isOutputLoad={isOutputLoad}
          setOutputLoad={setOutputLoad}
          outputData={outputData}
          setOutputData={setOutputData}
          handleSubmit={handleSubmit}
        />
      </div>
      <SearchHistory
        history={history}
        setHistory={setHistory}
        hideSearchHistory={hideSearchHistory}
        setHideSearchHistory={setHideSearchHistory}
        setQuery={setQuery}
        fullScreen={fullScreen}
      />
    </div>
  );
}

export default Home;
