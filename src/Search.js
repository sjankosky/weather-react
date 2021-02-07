import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <hr class="line" />
      <form id="search-city" autocomplete="off">
        <input
          class="enterCity"
          type="text"
          placeholder="Enter City"
          id="enter-city"
          autofocus
        ></input>
        <input class="search" type="submit" value="Search!"></input>
        <input
          class="currentTemp"
          type="submit"
          value="Current Weather"
          id="current-button"
        ></input>
      </form>
      <br />
    </div>
  );
}
