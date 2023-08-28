import React, { Suspense } from "react";
import "./App.css";
import { LoaderScreen } from "./components";

// components lazy LoaderScreen
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoaderScreen />}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
