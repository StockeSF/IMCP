import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MainContextProvider } from "./context/MainContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </BrowserRouter>
);
