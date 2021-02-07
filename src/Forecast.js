import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <div class="card forecastCard">
        Forecast will go here when API enabled
        <div class="row weather-forecast card-body" id="forecast"></div>
      </div>
    </div>
  );
}
