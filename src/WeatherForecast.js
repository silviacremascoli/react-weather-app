import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  // statements that handles whether the component has a return value, initially set on false
  const [loaded, setLoaded] = useState(false);
  // statement that handles the forecast response, initially set on null
  const [forecast, setForecast] = useState(null);

  // Effect Hook that changes the loaded statement back to false after rendering the component, which allows for further API calls
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    // function that uses the coordinates contained in the props from Weather.js to make an API call and render the component with its response; once there's a response, the function also changes the loaded statement to true
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiKey = "372b3246a78f090c2oeea103eb8344t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        setLoaded(true);
        setForecast(response.data.daily);
      })
      .catch((error) => console.log(error.toJSON()));
    return <div className="WeatherForecast">Loading forecast...</div>;
  }
}
