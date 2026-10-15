# React Weather App

A React weather dashboard for checking current conditions and a five-day forecast for a city or your current location. Built by [Silvia Cremascoli](https://www.silviacremascoli.com).

## Features

- Search for weather by city, with Milan shown by default.
- Use browser geolocation to look up nearby weather.
- View current temperature, conditions, humidity, and wind speed.
- See daily high and low temperatures in a five-day forecast.
- Get a day or night appearance based on the local time.

## Built With

- React 18 and JavaScript
- Axios and the SheCodes Weather API
- Bootstrap 5 and custom CSS
- Moment.js for forecast dates

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