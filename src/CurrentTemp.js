import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div>
      <div class="col">
        <span id="current-temp">34</span>
        <span class="formatDegree">°</span>
        <span class="formatUnits">
          {" "}
          <a href="#" class="active" id="farenheit">
            F
          </a>{" "}
          |{" "}
          <a href="#" id="celsius">
            C
          </a>
        </span>
        <img src="" alt="" id="icon" />
      </div>
    </div>
  );
}
