import React from "react";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°F`;
  }

  function icon(){
      let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
      return `${icon}`;
  }
  return (
    <div className="WeatherForecastPreview col-sm">
      {hours()}
      <div>
        <img
          src={icon()}
        />
      </div>
      {temperature()}
    </div>
  );
}
