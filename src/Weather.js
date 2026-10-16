import React, { useCallback, useEffect, useRef, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

const apiKey = "372b3246a78f090c2oeea103eb8344t0";
const savedCityKey = "react-weather-app:last-city";

function getSavedCity(defaultCity) {
  try {
    return window.localStorage.getItem(savedCityKey) || defaultCity;
  } catch {
    return defaultCity;
  }
}

function saveCity(city) {
  try {
    window.localStorage.setItem(savedCityKey, city);
  } catch {
    // Keep weather search usable when browser storage is unavailable.
  }
}

// function that makes an API call to get the weather for a specific city
function getWeatherByCity(city) {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(city)}&key=${apiKey}&units=metric`;
  return axios.get(apiUrl);
}

// function that makes an API call to get the weather for specific coordinates
function getWeatherByCoordinates(latitude, longitude) {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  return axios.get(apiUrl);
}

export default function Weather(props) {
  const [initialCity] = useState(() => getSavedCity(props.defaultCity));
  // statement that handles the city value, initially set on the props received by App.js
  const [city, setCity] = useState(initialCity);
  // reference to the city search input element
  const citySearchInput = useRef(null);
  // statement that handles the weather data response, initially set on not ready
  const [weatherData, setWeatherData] = useState({ ready: false });
  // statement that handles the loading state, initially set on true
  const [loading, setLoading] = useState(true);
  // statement that handles the error message
  const [error, setError] = useState("");
  // statement that handles the announcement message for screen readers
  const [announcement, setAnnouncement] = useState("Loading weather...");

  // function that receives the response of the API call and uses its values to change the statements of weatherData accordingly, while setting ready on true
  const getWeather = useCallback((response) => {
    setCity(response.data.city);
    saveCity(response.data.city);
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
    setLoading(false);
    setError("");
    setAnnouncement(`Weather for ${response.data.city} updated.`);
  }, []);

  // function that handles the error state when the API call fails
  const handleWeatherError = useCallback(() => {
    setLoading(false);
    setError("We couldn't load the weather. Check the location and try again.");
    setAnnouncement("");
  }, []);

  // useEffect hook that makes an initial API call to get the weather for the default city
  useEffect(() => {
    getWeatherByCity(initialCity)
      .then(getWeather)
      .catch(handleWeatherError);
  }, [initialCity, getWeather, handleWeatherError]);

  // function that receives the city's value and uses it to make an API call
  const search = (searchCity = city) => {
    if (!searchCity.trim()) {
      setLoading(false);
      setError("Enter a city name to search.");
      return;
    }
    setLoading(true);
    setError("");
    setAnnouncement(`Searching for ${searchCity}.`);
    getWeatherByCity(searchCity)
      .then(getWeather)
      .catch(handleWeatherError);
  };

  // function that receives the submit event, removes focus from the input, and calls the search function
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.querySelector(":focus")?.blur();
    search();
  };

  // function that changes the city statement according to the value submitted in the search box
  const getCity = (event) => {
    setCity(event.target.value);
  };

  // function that clears the city search input and focuses it
  const clearCity = () => {
    setCity("");
    citySearchInput.current?.focus();
  };

  // function that receives the current position and uses its coordinates' values to make an API call
  const getMyPosition = (position) => {
    const { latitude, longitude } = position.coords;
    getWeatherByCoordinates(latitude, longitude)
      .then(getWeather)
      .catch(handleWeatherError);
  };

  // function that uses the browser's Geolocation API to locate the current position
  const getPosition = (event) => {
    event.preventDefault();
    if (!navigator.geolocation) {
      setError("Location services are not available in this browser.");
      return;
    }
    setLoading(true);
    setError("");
    setAnnouncement("Getting weather for your location.");
    navigator.geolocation.getCurrentPosition(getMyPosition, () => {
      setLoading(false);
      setError("Location access was denied or unavailable. You can search for a city instead.");
    });
  };

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-8">
            <label className="visually-hidden" htmlFor="city-search">
              Search for a city
            </label>
            <div className="input-group">
              <div className="city-search-field">
                <input
                  id="city-search"
                  ref={citySearchInput}
                  type="search"
                  name="search"
                  placeholder="Type a city..."
                  className="form-control"
                  onChange={getCity}
                  value={city}
                />
                <button
                  type="button"
                  className="clear-search-button"
                  aria-label="Clear city search"
                  title="Clear city search"
                  onClick={clearCity}
                  disabled={!city}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button
                type="submit"
                className="btn btn-light search-button"
                aria-label="Search for a city"
              >
                <span aria-hidden="true">🔍</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <button
              type="button"
              className="btn btn-light w-100 my-location-button"
              aria-label="Use my location"
              onClick={getPosition}
            >
              My location <span aria-hidden="true">📍</span>
            </button>
          </div>
        </div>
      </form>
      <p
        className="visually-hidden"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </p>
      {loading && (
        <div
          className="d-flex justify-content-center my-2"
          aria-hidden="true"
        >
          <span className="spinner-border spinner-border-sm text-secondary" />
        </div>
      )}
      {error && (
        <p className="visually-hidden" role="alert">
          {error}
        </p>
      )}
      {weatherData.ready && (
        <>
          <WeatherInfo info={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </>
      )}
    </div>
  );
}
