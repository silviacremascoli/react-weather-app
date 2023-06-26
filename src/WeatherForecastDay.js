import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import moment from "moment";

export default function WeatherForecastDay(props) {
  // function that uses Moment.js to format the date response received through the props
  const day = () => {
    const date = props.data.time * 1000;
    return moment(date).format(`ddd`);
  };
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.condition.icon} />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max-temp">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-min-temp">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
