import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import timezone from "moment-timezone";

export default function CurrentTime(props) {
  const [time, setTime] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setReady(true);
    setTime(response.data.datetime);
  }

  if (ready) {
    return moment(time).format(`ddd, HH:SS`);
  } else {
    let apiUrl = `https://timezone.abstractapi.com/v1/current_time?api_key=69602c40dae44518b1b0eb6b7eb4c94f&location=${props.coordinates.latitude},${props.coordinates.longitude}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
