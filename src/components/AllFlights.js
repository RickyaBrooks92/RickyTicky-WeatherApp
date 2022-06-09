import React from "react";
import FetchFlights from "../apis/FetchFlights";

export class AllFlights extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FetchFlights />
        </h1>
      </div>
    );
  }
}

export default AllFlights;
