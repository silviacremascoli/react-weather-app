import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
  };

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit" role="group" aria-label="Temperature units">
          <button type="button" aria-pressed="true" onClick={showCelsius}>
            °<span className="unit-letter">C</span>
          </button>
          {" | "}
          <button type="button" aria-pressed="false" onClick={showFahrenheit}>
            °<span className="unit-letter">F</span>
          </button>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(props.celsius * 1.8 + 32)}
        </span>
        <span className="unit" role="group" aria-label="Temperature units">
          <button type="button" aria-pressed="false" onClick={showCelsius}>
            °<span className="unit-letter">C</span>
          </button>
          {" | "}
          <button type="button" aria-pressed="true" onClick={showFahrenheit}>
            °<span className="unit-letter">F</span>
          </button>
        </span>
      </div>
    );
  }
}
