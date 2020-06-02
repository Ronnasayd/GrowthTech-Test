import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
