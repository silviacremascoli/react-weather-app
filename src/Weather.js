import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  // statement that handles the city value, initially set on the props received by App.js
  const [city, setCity] = useState(props.defaultCity);
  // statement that handles the weather data response, initially set on not ready
  const [weatherData, setWeatherData] = useState({ ready: false });

  // function that receives the response of the API call and uses its values to change the statements of weatherData accordingly, while setting ready on true
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

  // function that receives the city's value and uses it make an API call
  const search = () => {
    const apiKey = "372b3246a78f090c2oeea103eb8344t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(getWeather)
      .catch((error) => console.log(error.toJSON()));
  };

  // function that receives the submit event and calls the search function
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  // function that changes the city statement according to the value submitted in the search box
  const getCity = (event) => {
    setCity(event.target.value);
  };

  // function that receives the current position and uses its coordinates' values to make an API call
  const getMyPosition = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "372b3246a78f090c2oeea103eb8344t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(getWeather)
      .catch((error) => console.log(error.toJSON()));
  };

  // function that uses the browser's Geolocation API to locate the current position
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
