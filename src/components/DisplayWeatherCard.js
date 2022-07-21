import React from 'react';
import { DataContext } from './Navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const DisplayWeatherCard = () => {
  const { weatherData } = React.useContext(DataContext);
  console.log(weatherData);
  console.log(new Date().getTime());

  return (
    <Box display='flex' justifyContent='center' alignItems='center' pt={4}>
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, textAlign: 'center' }} gutterBottom>
            {weatherData.name} as of{' '}
            {new Date(new Date().getTime()).toLocaleTimeString()}
          </Typography>
          <Typography sx={{ textAlign: 'center' }} variant='h5' component='div'>
            {weatherData.main.temp} &deg;F
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'center' }}>
            High: {weatherData.main.temp_max} &deg;F Low:{' '}
            {weatherData.main.temp_min} &deg;F
          </Typography>
          <Typography
            sx={{ mb: 1.5, textAlign: 'center' }}
            color='text.secondary'
          >
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
            {weatherData.weather[0].description}
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
