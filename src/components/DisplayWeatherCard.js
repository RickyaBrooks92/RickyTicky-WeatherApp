import React from "react";

function DisplayWeatherCard(props) {
  return (
    console.log(props),
    (
      <div>
        <h1>Hello World</h1>
        <h2>{props.temp}</h2>
        <h3>{props.description}</h3>
      </div>
    )
  );
}

export default DisplayWeatherCard;
