import React, { useState } from 'react';
import { DataContext } from './Navigation';

function FiveDayForcast() {
  const { weatherData, setWeatherData, latData, lonData } =
    React.useContext(DataContext);
  return (
    <div>
      <p>{weatherData.name}</p>
    </div>
  );
}
export default FiveDayForcast;
