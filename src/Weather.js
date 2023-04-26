import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Auckland</h1>
      <ul>
        <li>Wednesday, 26th April</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <div className="d-flex justify-content-start">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Sunny"
            />
            <span className="temperature">8</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6 p-2">
          <ul>
            <li>Current time: 11:20 AM</li>
            <li>Humidity: 60%</li>
            <li>Wind speed: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
