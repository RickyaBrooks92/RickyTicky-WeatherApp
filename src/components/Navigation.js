import React, { useState } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';

export const DataContext = React.createContext();
export const CenterContext = React.createContext();

const Navigation = () => {
  const [weatherData, setWeatherData] = useState({});
  const [flightData, setFlightData] = useState({});
  const [latData, setLatData] = useState('');
  const [lonData, setLonData] = useState('');
  const Center = {
    fontFamily: 'Arial',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <DataContext.Provider
      value={{
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
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </CenterContext.Provider>
    </DataContext.Provider>
  );
};

export default Navigation;
