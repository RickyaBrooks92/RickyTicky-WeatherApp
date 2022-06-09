import React from "react";

function FetchWeather() {
  const apiGet = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.934139&lon=-80.099739&appid=ae93a8df4eb012916dd53498f4b2cc0a"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      My API <br />
      <button onClick={apiGet}> Fetch Data</button>
    </div>
  );
}

export default FetchWeather;
