import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContext } from "./utils/context";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ store }}>
      <App />
    </GlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
