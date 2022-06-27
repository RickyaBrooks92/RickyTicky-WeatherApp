import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CitySearch from "./CitySearch";
import FetchFlights from "./FetchFlights";
export const DataContext = React.createContext();
export const CenterContext = React.createContext();
const Navigation = () => {
  const [weatherData, setWeatherData] = useState({});
  const [flightData, setFlightData] = useState({});
  const Center = {
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <DataContext.Provider
      value={{ weatherData, setWeatherData, flightData, setFlightData }}
    >
      <CenterContext.Provider value={Center}>
        <Router>
          <div>
            <nav className="Center">
              <Link to={"/"}>Current Weather</Link>
              <Link to={"/flights"}>Flights</Link>
            </nav>
            <Routes>
              <Route exact path="/" element={<CitySearch />} />
              <Route exact path="/flights" element={<FetchFlights />} />
              {/* <Route exact path="/flights" element={<AllFlights />} /> */}
            </Routes>
          </div>
        </Router>
      </CenterContext.Provider>
    </DataContext.Provider>
  );
};

export default Navigation;
