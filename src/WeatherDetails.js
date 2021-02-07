import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div class="extra">
      <ul class="list-group list-group-horizontal-sm">
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-warning">
            Sunrise: 7:00 <span id="sunrise"></span>
          </button>
        </li>
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-dark">
            Sunset: 17:00 <span id="sunset"></span>
          </button>
        </li>
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-secondary">
            Humidity: 34<span id="humidity"></span>%
          </button>
        </li>
        <li class="list-group-item-inner">
          <button type="button" class="btn btn-info">
            Wind: 5<span id="wind"></span>mph
          </button>
        </li>
      </ul>
    </div>
  );
}
