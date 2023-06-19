import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  const getWeather = (response) => {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      icon_alt: response.data.condition.description,
      coordinates: response.data.coordinates,
    });
  };

  const search = () => {
    const apiKey = "372b3246a78f090c2oeea103eb8344t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const getCity = (event) => {
    setCity(event.target.value);
  };

  const getMyPosition = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "372b3246a78f090c2oeea103eb8344t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  };

  const getPosition = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getMyPosition);
  };

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                name="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
                onChange={getCity}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                name="submit"
                value="🔍"
                className="btn btn-light w-100 search-button"
              />
            </div>
            <div className="col-2">
              <input
                type="button"
                className="btn btn-light w-100 my-location-button"
                value="📍"
                onClick={getPosition}
              />
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <p className="text-center">Loading...</p>;
  }
}
