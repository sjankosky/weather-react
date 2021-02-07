import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div class="extra">
      <ul class="list-group list-group-horizontal-sm">
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-warning">
            Sunrise: <span id="sunrise"></span>
          </button>
        </li>
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-dark">
            Sunset: <span id="sunset"></span>
          </button>
        </li>
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-secondary">
            Humidity: <span id="humidity"></span>%
          </button>
        </li>
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-info">
            Wind: <span id="wind"></span>mph
          </button>
        </li>
      </ul>
    </div>
  );
}
