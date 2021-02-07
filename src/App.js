import React from "react";
import "./App.css";
import Search from "./Search";
import Current from "./Current";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <h1>Weather Check</h1>
            <Search />
            <Current />
            {/* <WeatherDetails /> */}
            <Forecast />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
