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
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              name="submit"
              value="Search"
              className="btn btn-success"
            />
          </div>
        </div>
      </form>
      <h1>Auckland</h1>
      <ul>
        <li>26th April, Wednesday, 11:20</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Sunny"
          />
          11°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: </li>
            <li>Humidity: 60%</li>
            <li>Wind speed: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
