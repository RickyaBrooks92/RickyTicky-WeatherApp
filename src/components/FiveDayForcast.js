import React from 'react';
import { DataContext } from './Navigation';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
const FiveDayForcast = () => {
  const { fiveDayData } = React.useContext(DataContext);

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      {fiveDayData.map((data) => (
        <Box m={2}>
          <Card sx={{ minWidth: 250 }}>
            <Typography sx={{ fontSize: 14, textAlign: 'center' }}>
              {data.dt_txt}
            </Typography>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>
              {data.main.feels_like} &deg;F
            </Typography>
            <Typography sx={{ textAlign: 'center', fontSize: 18 }}>
              {data.weather[0].main}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
export default FiveDayForcast;
