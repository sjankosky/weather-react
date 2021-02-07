import React from "react";
import "./Current.css";
import CurrentTemp from "./CurrentTemp";
import WeatherDetails from "./WeatherDetails";

export default function Current() {
  return (
    <div>
      <div class="current">
        <div class="card today">
          <div class="card-body">
            <div class="row">
              <div class="col city-date-position">
                <p class="card-text">
                  {" "}
                  <span id="store-city">Reston</span>
                  <br />
                  <p class="current-date">
                    <span id="current-description">Few clouds</span>
                    <br />
                    <br />
                    Last updated: Thursday 16:50 <span id="date-header"></span>
                  </p>
                </p>
              </div>
              <CurrentTemp />
              <WeatherDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
