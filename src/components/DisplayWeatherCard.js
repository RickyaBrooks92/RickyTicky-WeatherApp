import React from 'react';
import { DataContext } from './Navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const DisplayWeatherCard = () => {
  const { weatherData } = React.useContext(DataContext);
  return (
    <Box display='flex' justifyContent='center' alignItems='center' pt={4}>
      <Card sx={{ minWidth: 250 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {weatherData.name}
          </Typography>
          <Typography variant='h5' component='div'>
            {weatherData.main.temp} &deg;F
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Sunrise:{''}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              'en-IN'
            )}
            <br />
            Sunset:{' '}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              'en-IN'
            )}
          </Typography>
          <Typography variant='body2'>
            {weatherData.weather[0].description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
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
