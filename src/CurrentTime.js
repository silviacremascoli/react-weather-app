import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CurrentTime(props) {
  const [time, setTime] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  const handleResponse = (response) => {
    setReady(true);
    setTime(response.data.datetime);
  };

  if (ready) {
    let date = new Date(time);
    let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekDay[date.getDay()];
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day}, ${hour}:${minutes}`;
  } else {
    let apiUrl = `https://timezone.abstractapi.com/v1/current_time?api_key=69602c40dae44518b1b0eb6b7eb4c94f&location=${props.coordinates.latitude}, ${props.coordinates.longitude}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
