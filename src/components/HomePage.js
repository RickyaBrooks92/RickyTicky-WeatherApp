// import { response } from "express";
import React, { useEffect, useState } from 'react';
import DisplayWeatherCard from './DisplayWeatherCard';
import { DataContext } from './Navigation';
import '../App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { apiGetWeatherCurrentData } from '../Thunks/FetchWeatherData';
function HomePage() {
  const { setWeatherData, setLatData, setLonData, lonData, latData } =
    React.useContext(DataContext);
  const [data, setData] = useState({});
  let [city, setCity] = useState('');
  let [state, setState] = useState('');

  const uriEncodedState = encodeURIComponent(state);
  const uriEncodedCity = encodeURIComponent(city);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatData(position.coords.latitude);
      setLonData(position.coords.longitude);
      console.log(lonData, latData);
      console.log(city);
    });
  });

  const apiGetCityData = async (e) => {
    e.preventDefault();
    const latLongRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${uriEncodedCity},${uriEncodedState},3166-2:US&limit=10&appid=ae93a8df4eb012916dd53498f4b2cc0a`
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
  };
  const dailyWeatherInfo = () => {
    return (
      <div>
        <DisplayWeatherCard />
      </div>
    );
  };

  const handleClick = (e) => {
    console.log('hit me');
    e.preventDefault();
    dailyWeatherInfo();
  };

  const handleClickToday = (e) => {
    console.log('Today Clicked');
    e.preventDefault();
    apiGetWeatherCurrentData(latData, lonData).then((data) => {
      setData(data);
      setWeatherData(data);
    });
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
        <Button type='submit'></Button>
      </Box>

      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Button variant='contained' size='medium'>
          5-Day Forcast
        </Button>
        <Button variant='contained' size='medium' onClick={handleClickToday}>
          Today's Forcast
        </Button>
        <Button variant='contained' size='medium' onClick={handleClick}>
          Hourly Forcast
        </Button>
      </Stack>
      <div>
        {typeof data.main != 'undefined' ? <DisplayWeatherCard /> : <div></div>}
      </div>
    </div>
  );
}

export default HomePage;
