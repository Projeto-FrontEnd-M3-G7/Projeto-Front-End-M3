import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-use-before-define
import React from "react";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { ProductProvider } from "./providers/ProductContext/ProductContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
