// import { response } from "express";
import React, { useEffect, useState } from "react";
import DisplayWeatherCard from "./DisplayWeatherCard";

function CitySearch() {
  const [data, setData] = useState({});
  const [isShown, setIsShown] = useState(false);
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [CityName, setCityName] = useState("");
  let [Weather, setWeather] = useState([]);
  let [CurrentTemp, setCurrentTemp] = useState({});
  const uriEncodedState = encodeURIComponent(state);
  const uriEncodedCity = encodeURIComponent(city);

  const apiGetCityData = async (e) => {
    e.preventDefault();
    await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${uriEncodedCity},${uriEncodedState},3166-2:US &limit=10&appid=ae93a8df4eb012916dd53498f4b2cc0a`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const cityInfoData = result[0];

        return fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfoData.lat}&lon=${cityInfoData.lon}&units=imperial&appid=ae93a8df4eb012916dd53498f4b2cc0a`
        );
      })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setCityName(result.name);
        setCurrentTemp(result.main);
        setWeather(result.weather[0]);
        console.log(result);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    apiGetCityData(e);
    setIsShown((current) => !current);
  };

  return (
    <div>
      {console.log(data)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter State"
          maxLength="50"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit"> get weather </button>
      </form>
      {isShown && (
        <div>
          <h2>{CityName}</h2>
          <h2>{CurrentTemp.temp}</h2>
          <h2>{Weather.main}</h2>
        </div>
      )}
      {isShown}
    </div>
  );
}

export default CitySearch;
