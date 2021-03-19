import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div class="card forecastCard">
        <div class="row weather-forecast card-body" id="forecast">
          <ForecastPreview data={forecast.list[0]} />
          <ForecastPreview data={forecast.list[1]} />
          <ForecastPreview data={forecast.list[2]} />
          <ForecastPreview data={forecast.list[3]} />
          <ForecastPreview data={forecast.list[4]} />
          <ForecastPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "ed2d0610004cfa337a722371f4a4d4a7";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=imperial&appid=${apiKey}`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
