import React from "react";

const DisplayWeatherCard = ({ weatherData }) => (
  <div>
    <p>{weatherData.name}</p>
    <p>Temprature: {weatherData.main.temp}</p>
    <p>Sunrise: {weatherData.sys.sunrise}</p>
    <p>Sunset: {weatherData.sys.sunset}</p>
    <p>Description: {weatherData.weather[0].description}</p>
  </div>
);

export default DisplayWeatherCard;
