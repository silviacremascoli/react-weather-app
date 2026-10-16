import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const { longitude, latitude } = props.coordinates;

  useEffect(() => {
    let active = true;
    const apiKey = "372b3246a78f090c2oeea103eb8344t0";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    setLoading(true);
    setError("");

    axios
      .get(apiUrl)
      .then((response) => {
        if (active) {
          setForecast(response.data.daily);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) {
          setError("The forecast couldn't be loaded.");
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [latitude, longitude]);

  if (loading) {
    return (
      <>
        <p
          className="visually-hidden"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Loading forecast...
        </p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p className="visually-hidden" role="alert">
          {error}
        </p>
      </>
    );
  }

  return (
    <section className="WeatherForecast" aria-labelledby="forecast-heading">
      <h2 id="forecast-heading" className="visually-hidden">
        Five-day forecast
      </h2>
      <ul className="row WeatherForecast-list">
        {forecast.slice(0, 5).map((dailyForecast) => (
          <li className="col" key={dailyForecast.time}>
            <WeatherForecastDay data={dailyForecast} />
          </li>
        ))}
      </ul>
    </section>
  );
}
