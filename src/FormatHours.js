import React from "react";

export default function FormatHours(props) {
  let date = new Date(props);
  let hours = date.getHours();
  if (hours < 10) {
    //this ensures that if it's 9am in the morning, it will show as `09`//
    hours = `0${hours}`;
  }
  let mins = date.getMinutes();
  if (mins < 10) {
    //this ensures that if it's 9:05am in the morning, it will show as `09:05` instead of `09:5`//
    mins = `0${mins}`;
  }
  return `${hours}:${mins}`;
}
