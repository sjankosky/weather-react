import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Current.css";
import "./App.css";
import "./CurrentTemp.css";
import "./Footer.css";
import "./Forecast.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
