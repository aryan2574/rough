import React from "react";
import "./App.css";

import HelloWorld from "./components/HelloWorld";
import CheckIn from "./components/CheckIn";
import UniqNum from "./components/UniqNum";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <CheckIn />
      <UniqNum />
    </div>
  );
}

export default App;
