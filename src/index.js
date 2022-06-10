import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

// CSS
import "./index.css";

// MAIN APP
import App from "./App";

// Context API
import { ContextProvider } from "./contexts/ContextProvider";

import reportWebVitals from "./reportWebVitals";

// Syncfusion License Registration
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(process.env.REACT_APP_SyncFusionKey);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
