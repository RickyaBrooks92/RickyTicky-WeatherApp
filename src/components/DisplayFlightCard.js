import React from "react";
import { DataContext } from "./Navigation";
import "../App.css";
const DisplayFlightCard = () => {
  const { flightData } = React.useContext(DataContext);
  return (
    <div className="Center">
      <p>Airline:{flightData.airline.name}</p>
      <p>Status: {flightData.flight_status}</p>
      <p>Departing:{flightData.departure.airport}</p>
      <p>Arriving:{flightData.arrival.airport}</p>
      <p>Arriving Terminal:{flightData.arrival.terminal}</p>
    </div>
  );
};

export default DisplayFlightCard;
