import React, { useEffect, useState } from "react";

function FetchWeather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  const apiGet = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ae93a8df4eb012916dd53498f4b2cc0a`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      My API Weather
      <br />
      <button onClick={apiGet}> Fetch Weather Data</button>
    </div>
  );
}

export default FetchWeather;
