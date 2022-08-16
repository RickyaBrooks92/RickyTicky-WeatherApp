import React from 'react';
import { DataContext } from './Navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

const DisplayWeatherCard = () => {
  const { weatherData } = React.useContext(DataContext);
  console.log(weatherData);
  console.log(new Date().getTime());
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      pt={5}
    >
      <Card
        sx={{
          minWidth: 400,
          border: 1,
          borderRadius: '16px',
          maxHeight: 250,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            borderColor: 'text.primary',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            component='div'
          >
            <div Style='font-weight: 600; font-size: 18px;  font-family: "Lucida Console", "Courier New", monospace;'>
              {weatherData.name} as of{' '}
              {new Date(new Date().getTime()).toLocaleTimeString()}
            </div>
            <div Style='font-weight: bold; font-size: 20px; font-family: "Lucida Console", "Courier New", monospace;'>
              {weatherData.main.temp} &deg;F{' '}
            </div>

            <div Style='font-weight: bold; font-size: 16px; font-family: "Lucida Console", "Courier New", monospace;'>
              High: {weatherData.main.temp_max} &deg; • Low:{' '}
              {weatherData.main.temp_min} &deg;
            </div>
            <div Style='font-weight:bold; font-size:15px; font-family: "Lucida Console", "Courier New", monospace;'>
              Sunrise:{''}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                'en-IN'
              )}
              <br />
              Sunset:{' '}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                'en-IN'
              )}
              <br />
            </div>
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt='weather icon'
              width='90'
              height='90'
              align='right'
            ></img>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default DisplayWeatherCard;

// {/* // <div>
// //   <p>{weatherData.name}</p>
// //   <p>Temprature:{weatherData.main.temp} &deg;F</p>
// //   <p>
// //     Sunrise:{" "}
// //     {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
// //   </p>
// //   <p>
// //     {" "}
// //     Sunset:{" "}
// //     {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
// //   </p>
// //   <p>Description: {weatherData.weather[0].description}</p>
// // </div> */}

// {
/* <div id="card" className="weather">
<div className="details">
  <div className="temp">
    {weatherData.main.temp}
    <span>&deg;</span>
  </div>
  <div className="right">
    <div id="summary">{desc}</div>
    <div style={{ fontWeight: "bold", marginTop: "4px" }}>{name}</div>
  </div>
</div>
<img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
<div className="infos">
  <img
    alt="humidity1"
    className="humidityimg"
    style={{ width: "5", height: "5" }}
    src="humidity.svg"
  ></img>
  <div className="humidity">Humidity {humidity}%</div>
  <img
    alt="visibility1"
    className="visibilityimg"
    style={{ width: "5", height: "5" }}
    src="visibility.svg"
  ></img>
  <div className="visibility">Visibility {visibility} km</div>
  <img
    alt="windspeed1"
    className="windimg"
    style={{ width: "5", height: "5" }}
    src="wind.svg"
  ></img>
  <div className="windspeed">Wind Speed {windspeed} km</div>
</div>
</div>
</div>
</div> */
// }
