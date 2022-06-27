import React from "react";
import { DataContext } from "./Navigation";
const DisplayWeatherCard = () => {
  const { weatherData } = React.useContext(DataContext);
  return (
    <div>
      <p>{weatherData.name}</p>
      <p>Temprature:{weatherData.main.temp} &deg;F</p>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p>
        {" "}
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};
export default DisplayWeatherCard;
