import React, { useState, useEffect } from 'react';
import { DataContext } from './Navigation';

const FiveDayForcast = () => {
  const { fiveDayData } = React.useContext(DataContext);
  const [fiveDayArray, setFiveDayArray] = useState([]);

  // const filterData = (object) => {
  //   const newArray = object.list.filter((data) => {
  //     return data.dt_txt.includes('12:00:00');
  //   });
  //   return newArray;
  // };

  return (
    <div>
      <h1>Five Day Forcast</h1>
    </div>
  );
};
export default FiveDayForcast;
