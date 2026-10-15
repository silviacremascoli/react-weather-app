# React Weather App

A React weather dashboard for checking current conditions and a five-day forecast for a city or your current location. Built by [Silvia Cremascoli](https://www.silviacremascoli.com).

## Features

- Search for weather forecast by city, with Milan (where I was born ✌️) shown by default.
- Use browser geolocation to look up nearby weather.
- View current temperature, conditions, humidity, and wind speed.
- See daily high and low temperatures in a five-day forecast.
- Get a day or night appearance based on the local time.

## Built With

- React 18 and JavaScript
- Axios and the SheCodes Weather API
- Bootstrap 5 and custom CSS
- Moment.js for forecast dates

## Project Structure

```text
.
|-- public/
|   |-- index.html                 App entry HTML
|   `-- robots.txt
|-- src/
|   |-- App.js                     App shell and day/night theme
|   |-- Weather.js                 City search, geolocation, and current weather
|   |-- WeatherInfo.js             Current conditions display
|   |-- WeatherForecast.js         Forecast data and five-day layout
|   |-- WeatherForecastDay.js      Individual forecast day
|   |-- WeatherIcon.js             Weather condition icons
|   |-- WeatherTemperature.js      Temperature display and unit conversion
|   |-- FormattedDate.js           Date formatting
|   |-- Footer.js                  Attribution and project links
|   |-- App.css                    App styles
|   |-- Weather*.css               Weather component styles
|   |-- Footer.css                 Footer styles
|   |-- index.css                  Global styles
|   |-- index.js                   React entry point
|   |-- reportWebVitals.js         Performance reporting
|   `-- setupTests.js              Test setup
|-- package.json                   Dependencies and npm scripts
`-- README.md
```

## Skills Demonstrated

- Building reusable, component-based interfaces with React.
- Managing UI state and side effects with React Hooks.
- Integrating a third-party REST API with Axios and handling asynchronous data.
- Using the browser Geolocation API to request location-based weather.
- Transforming API responses into current-condition and forecast views.
- Creating responsive layouts with Bootstrap and custom CSS.
- Formatting dates and displaying weather icons and temperature conversions.

## Run Locally

You'll need Node.js and npm installed.

```bash
git clone https://github.com/silviacremascoli/react-weather-app.git
cd react-weather-app
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` starts the development server.
- `npm test` runs the test suite in watch mode.
- `npm run build` creates an optimized production build in `build/`.