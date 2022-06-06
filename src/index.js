import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(process.env.REACT_APP_SyncFusionKey);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
