import { ContextProvider } from "./context/Context";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
