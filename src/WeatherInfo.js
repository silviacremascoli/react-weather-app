import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo m-2">
      <div className="row">
        <div className="col-md-6 col-md">
          <h1>{props.info.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.info.date} />
            </li>
            {/* <li>
              Local time: <CurrentTime coordinates={props.info.coordinates} />
            </li> */}
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind speed: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-md-6 col-md">
          <div className="row CurrentTemperature">
            <div className="d-flex">
              <WeatherIcon code={props.info.icon} alt="" />
              <WeatherTemperature celsius={props.info.temperature} />
            </div>
          </div>
          <div className="row Description">
            <div className="col text-center">
              <span className="text-capitalize">{props.info.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
