import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo m-2">
      <div className="row">
        <div className="col-6">
          <h1>{props.info.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.info.date} />
            </li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind speed: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="d-flex justify-content-end">
              <WeatherIcon code={props.info.icon} alt={props.info.icon_url} />
              <span className="temperature">
                {Math.round(props.info.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="row">
            <div className="col text-end">
              <span className="text-capitalize">{props.info.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
