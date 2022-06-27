import React from "react";
// import FetchFlights from "./FetchFlights";
import FetchWeather from "./FetchWeather";
export class AllFlights extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FetchWeather />
        </h1>
      </div>
    );
  }
}

export default AllFlights;
