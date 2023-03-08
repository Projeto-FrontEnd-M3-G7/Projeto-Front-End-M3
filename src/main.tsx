import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-use-before-define
import React from "react";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
