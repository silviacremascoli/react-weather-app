import React from "react";

export default function WeatherIcon(props) {
  return (
    <img src={process.env.PUBLIC_URL + `/${props.code}.svg`} alt={props.alt} />
  );
}
