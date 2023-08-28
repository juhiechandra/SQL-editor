import React, { Suspense } from "react";
import "./App.css";
import { NoOutput } from "./components";

// components lazy LoaderScreen
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<NoOutput />}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
