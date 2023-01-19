import React from "react";
import { DataContext } from "./App";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

const FiveDayForcast = () => {
  const { fiveDayData } = React.useContext(DataContext);
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      flexWrap="wrap"
      flexDirection="row"
    >
      {fiveDayData.map((data) => (
        <Box m={2}>
          <Card
            sx={{
              minWidth: 250,

              border: 1,
              borderRadius: "16px",
              maxHeight: 250,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#5f9ea0",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              <div Style='font-size: 20px; font-weight: bold; font-family: "Lucida Console", "Courier New", monospace;'>
                {Month[new Date(data.dt * 1000).getMonth()] +
                  " " +
                  new Date(data.dt * 1000).getDate()}
              </div>
              <div Style='font-size: 20px; font-weight: bold; font-family: "Lucida Console", "Courier New", monospace;'>
                {data.main.feels_like} &deg;F
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather icon"
                width="90"
                height="90"
                align="center"
              ></img>
              <div Style='font-size: 16px; font-weight: bold; font-family: "Lucida Console", "Courier New", monospace;'>
                {data.weather[0].main}
              </div>
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
export default FiveDayForcast;
