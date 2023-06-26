import React from "react";
import moment from "moment";

export default function FormattedDate(props) {
  const date = props.date;
  const formattedDate = moment(date).format("dddd, hh:mm A");
  /* let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDay[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let newformat = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes; */
  return formattedDate;
}
