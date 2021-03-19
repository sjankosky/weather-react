import React, { useState } from "react";
import "./Current.css";
import CurrentTemp from "./CurrentTemp";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Current(props) {
  return (
    <div>
      <div class="current">
        <div class="card today">
          <div class="card-body">
            <div class="row">
              <div class="col city-date-position">
                <p class="card-text">
                  {" "}
                  <div className="float-left">
                    <div>
                      <img
                        src={props.data.iconUrl}
                        alt={props.data.description}
                        className="float-left"
                      />
                    </div>
                  </div>
                  <span id="store-city">{props.data.city}</span>
                  <br />
                  <p class="current-date">
                    <span id="current-description">
                      {props.data.description}
                    </span>
                    <br />
                    <br />
                    <FormattedDate date={props.data.date} />
                  </p>
                </p>
              </div>

              <div>
                <div className="float-left">
                  <CurrentTemp fahrenheit={props.data.temperature} />
                </div>
              </div>
              {/* <WeatherDetails /> */}
              <div class="extra">
                <ul class="list-group list-group-horizontal-sm">
                  <li class="list-group-item-inner">
                    <button type="button" class="btn btn-warning">
                      Sunrise: {props.data.sunrise} <span id="sunrise"></span>
                    </button>
                  </li>
                  <li class="list-group-item-inner">
                    <button type="button" class="btn btn-dark">
                      Sunset: {props.data.sunset} <span id="sunset"></span>
                    </button>
                  </li>
                  <li class="list-group-item-inner">
                    <button type="button" class="btn btn-secondary">
                      Humidity: {props.data.humidity}
                      <span id="humidity"></span>%
                    </button>
                  </li>
                  <li class="list-group-item-inner">
                    <button type="button" class="btn btn-info">
                      Wind: {props.data.wind}
                      <span id="wind"></span>mph
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
