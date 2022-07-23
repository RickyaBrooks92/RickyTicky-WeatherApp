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
        <Box>
          <Card sx={{ minWidth: 250 }}>
            <Typography sx={{ fontSize: 14, textAlign: 'center' }}>
              {data.dt_txt}
            </Typography>
            <Typography variant='h3'>{data.main.feels_like}</Typography>
            <Typography variant='h3'>{data.weather[0].main}</Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
export default FiveDayForcast;
