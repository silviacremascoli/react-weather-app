import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      icon_alt: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                name="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                name="submit"
                value="Search"
                className="btn border btn-light w-100"
              />
            </div>
          </div>
        </form>
        <div className="WeatherInfo m-2">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-2">
            <div className="col-6">
              <div className="d-flex justify-content-start">
                <img src={weatherData.icon} alt={weatherData.icon_url} />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6 p-2">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "372b3246a78f090c2oeea103eb8344t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);

    return <p className="text-center">Loading...</p>;
  }
}
