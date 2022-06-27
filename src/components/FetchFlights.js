import React, { useState } from "react";
import DisplayFlightCard from "./DisplayFlightCard";
import { DataContext, CenterContext } from "./Navigation";
import "../App.css";
function FetchFlights() {
  const { flightData, setFlightData } = React.useContext(DataContext);
  let [flightNumber, setFlightNumber] = useState("");
  const { Center } = React.useContext(CenterContext);
  const uriEncodedFlightNumber = encodeURIComponent(flightNumber);

  const apiGetPlaneData = async () => {
    const planeDataRes = await fetch(
      `http://api.aviationstack.com/v1/flights?access_key=592d9edba6f55d3fe9a1c771a9578bc9&flight_iata=${uriEncodedFlightNumber}&limit=1`
    );
    const planeDataJson = await planeDataRes.json();
    setFlightData(planeDataJson.data[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiGetPlaneData();
  };

  return (
    <div style={Center}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Flight Number"
          maxLength="50"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
      </form>
      <div className="App">
        {typeof flightData.airline != "undefined" ? (
          <DisplayFlightCard />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default FetchFlights;
