import React, { useState } from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

console.log(process.env.REACT_APP_WEATHER_API_KEY);
console.log(process.env.REACT_APP_API_KEY);

export const DataContext = React.createContext();
export const CenterContext = React.createContext();

const Navigation = () => {
  const [fiveDayData, setFiveDayData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [flightData, setFlightData] = useState({});
  const [latData, setLatData] = useState("");
  const [lonData, setLonData] = useState("");
  const Center = {
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <DataContext.Provider
      value={{
        fiveDayData,
        setFiveDayData,
        weatherData,
        setWeatherData,
        flightData,
        setFlightData,
        latData,
        setLatData,
        lonData,
        setLonData,
      }}
    >
      <CenterContext.Provider value={{ Center }}>
        <Router basename="/RickyTicky-WeatherApp">
          <div>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </CenterContext.Provider>
    </DataContext.Provider>
  );
};

export default Navigation;
