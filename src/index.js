import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";   // 👈 import your component
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portfolio />   {/* 👈 render your portfolio */}
  </React.StrictMode>
);

