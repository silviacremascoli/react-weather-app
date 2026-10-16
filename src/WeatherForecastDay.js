import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import moment from "moment";

export default function WeatherForecastDay(props) {
  // function that uses Moment.js to format the date response received through the props
  const day = () => {
    const date = props.data.time * 1000;
    return moment(date).format("dddd");
  };
  const maximum = Math.round(props.data.temperature.maximum);
  const minimum = Math.round(props.data.temperature.minimum);
  return (
    <article
      className="WeatherForecast-day-item"
      aria-label={`${day()}: ${props.data.condition.description}, high ${maximum} degrees, low ${minimum} degrees Celsius`}
    >
      <h3 className="WeatherForecast-day">{moment(props.data.time * 1000).format("ddd")}</h3>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.condition.icon} alt="" />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max-temp">
          <span className="visually-hidden">High: </span>
          {maximum}°
        </span>
        <span className="WeatherForecast-min-temp">
          <span className="visually-hidden">Low: </span>
          {minimum}°
        </span>
      </div>
    </article>
  );
}
