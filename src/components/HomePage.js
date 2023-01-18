// import { response } from "express";
import React, { useEffect, useState } from "react";
import DisplayWeatherCard from "./DisplayWeatherCard";
import { DataContext } from "./Navigation";
import "../index.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { apiGetWeatherCurrentData } from "../Thunks/FetchWeatherData";
import { apiGetFiveDayWeatherForcastData } from "../Thunks/FetchWeatherData";
import { apiGetCityLatLon } from "../Thunks/FetchWeatherData";
import FiveDayForcast from "./FiveDayForcast";

export const mapArray = (array) => {
  return array.map((data) => {
    return (
      <div>
        <h1>{data.dt_txt}</h1>
        <h1>{data.main.temp}</h1>
      </div>
    );
  });
};

function HomePage() {
  const {
    setWeatherData,
    setLatData,
    setLonData,
    lonData,
    latData,
    setFiveDayData,
    fiveDayData,
  } = React.useContext(DataContext);
  let [data, setData] = useState({});
  let [city, setCity] = useState("");
  let [state, setState] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (latData === "" && lonData === "") {
        setLatData(position.coords.latitude);
        setLonData(position.coords.longitude);
        localStorage.lonData = lonData;
        localStorage.latData = latData;
      }
    });
  }, [latData, lonData, setLatData, setLonData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    apiGetCityLatLon(city, state).then((data) => {
      if (data.name) {
        setLatData(data.lat);
        setLonData(data.lon);
        apiGetWeatherCurrentData(data.lat, data.lon).then((data) => {
          setWeatherData(data);
          setData(data);
          setFiveDayData({});
        });
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

  const handleClickWeek = (e) => {
    e.preventDefault();
    apiGetFiveDayWeatherForcastData(latData, lonData).then((data) => {
      if (data) {
        setFiveDayData(data);
      }
    });
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="city"
          label="City"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          sx={{ borderColor: "red" }}
          id="state"
          label="State"
          variant="outlined"
          onChange={(e) => setState(e.target.value)}
        />
        <Button
          sx={{ backgroundColor: "#5f9ea0" }}
          type="submit"
          variant="contained"
          size="small"
        >
          Submit
        </Button>
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
          sx={{ backgroundColor: "#5f9ea0" }}
          variant="contained"
          size="medium"
          onClick={handleClickWeek}
        >
          5-Day Forcast
        </Button>
        <Button
          sx={{ backgroundColor: "#5f9ea0" }}
          variant="contained"
          size="medium"
          onClick={handleClickToday}
        >
          Today's Forcast
        </Button>
      </Stack>
      <div>
        {typeof data.main != "undefined" ? <DisplayWeatherCard /> : <div></div>}
      </div>
      <div>
        {typeof fiveDayData[2] != "undefined" ? (
          <FiveDayForcast />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
