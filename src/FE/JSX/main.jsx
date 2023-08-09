import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./CSS/main.css";
import { InfoProvider } from "./InfoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </React.StrictMode>
);
