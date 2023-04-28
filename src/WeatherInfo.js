import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-6 mt-1">
          <div className="row">
            <div className="d-flex justify-content-end">
              <WeatherIcon code={props.info.icon} alt={props.info.icon_url} />
              <WeatherTemperature celsius={props.info.temperature} />
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <span className="text-capitalize">{props.info.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
