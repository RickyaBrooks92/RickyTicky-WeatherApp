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
import { apiGetHourlyWeatherForcastData } from '../Thunks/FetchWeatherData';
import { apiGetFiveDayWeatherForcastData } from '../Thunks/FetchWeatherData';
import { apiGetCityData } from '../Thunks/FetchWeatherData';
function HomePage() {
  const { setWeatherData, setLatData, setLonData, lonData, latData } =
    React.useContext(DataContext);
  const [data, setData] = useState({});
  let [city, setCity] = useState('');
  let [state, setState] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatData(position.coords.latitude);
      setLonData(position.coords.longitude);
      console.log(lonData, latData);
      localStorage.longData = lonData;
      localStorage.latData = latData;
      console.log(city);
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    apiGetCityData(city, state).then((data) => {
      if (data.main) {
        setData(data);
        setWeatherData(data);
      }
    });
  };

  const handleClickToday = (e) => {
    e.preventDefault();
    apiGetWeatherCurrentData(latData, lonData).then((data) => {
      setData(data);
      setWeatherData(data);
    });
  };

  const handleClickHourly = (e) => {
    e.preventDefault();
    apiGetHourlyWeatherForcastData(latData, lonData).then((data) => {
      setData(data);
      setWeatherData(data);
    });
  };

  const handleClickWeek = (e) => {
    e.preventDefault();
    apiGetFiveDayWeatherForcastData(latData, lonData).then((data) => {
      if (data.main) {
        setData(data);
        setWeatherData(data);
      }
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
          '& > :not(style)': { m: 1, width: '20ch' },
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
        <Button type='submit' variant='contained' size='small'>
          Submit
        </Button>
      </Box>

      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Button variant='contained' size='medium' onClick={handleClickWeek}>
          5-Day Forcast
        </Button>
        <Button variant='contained' size='medium' onClick={handleClickToday}>
          Today's Forcast
        </Button>
        <Button variant='contained' size='medium' onClick={handleClickHourly}>
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
