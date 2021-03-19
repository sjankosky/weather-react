import React, { useState } from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div class="current-temp">
        <div class="col">
          <span id="current-temp">{props.fahrenheit}</span>
          <span className="unit">
            °F |{" "}
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div class="current-temp">
        <div class="col">
          <span id="current-temp">{Math.round(celsius)}</span>
          <span className="unit">
            <a href="/" onClick={convertToFahrenheit}>
              {" "}
              °F
            </a>{" "}
            | °C
          </span>
        </div>
      </div>
    );
  }
}
