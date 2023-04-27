import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo m-2">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <div className="d-flex justify-content-start">
            <img src={props.info.icon} alt={props.info.icon_url} />
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6 p-2">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind speed: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
