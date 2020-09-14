import React from "react";
import "./styles/main.scss";

import Navbar from "./components/navbar-components/navbar";
import Main from "./components/main";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}
