// import { response } from "express";
import React, { useEffect, useState } from 'react';
import DisplayWeatherCard from './DisplayWeatherCard';
import { DataContext } from './Navigation';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CitySearch() {
  const { setWeatherData } = React.useContext(DataContext);
  const [data, setData] = useState({});
  let [city, setCity] = useState('');
  let [state, setState] = useState('');
  let [lat, setLat] = useState('');
  let [lon, setLon] = useState('');

  const uriEncodedState = encodeURIComponent(state);
  const uriEncodedCity = encodeURIComponent(city);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log(lat, lon);
    });
  });

  const apiGetCityData = async (e) => {
    e.preventDefault();
    const latLongRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${uriEncodedCity},${uriEncodedState},3166-2:US &limit=10&appid=ae93a8df4eb012916dd53498f4b2cc0a`
    );
    const latLongJson = await latLongRes.json();
    const cityInfoData = latLongJson[0];
    if (!cityInfoData) {
      alert('Location not found');
      return;
    }
    const cityInfoRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfoData.lat}&lon=${cityInfoData.lon}&units=imperial&appid=ae93a8df4eb012916dd53498f4b2cc0a`
    );
    const cityInfoJson = await cityInfoRes.json();
    setData(cityInfoJson);
    setWeatherData(cityInfoJson);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    apiGetCityData(e);
    // setIsShown((current) => !current);
  };

  return (
    <div>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='city'
          label='City'
          variant='outlined'
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id='state'
          label='State'
          variant='outlined'
          onChange={(e) => setState(e.target.value)}
        />
      </Box>

      <div>
        {typeof data.main != 'undefined' ? <DisplayWeatherCard /> : <div></div>}
      </div>
    </div>
  );
}

export default CitySearch;
