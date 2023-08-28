import React from "react";
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

  function handleSubmit() {
    SearchOutputTerminal = true;
    executedQuery = query;
    history = [...history, query];
    localStorage.setItem(
      "history",
      JSON.stringify({ items: [...history, query] })
    );
  }

  outputData = data;
  isOutputLoad = isLoading;

  function handleFileImport(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        query = content;
      };
      reader.readAsText(file);
    }
  }

  SearchOutputTerminal = false;
  hideSearchHistory = true;

  return <div></div>;
}

export default Home;
