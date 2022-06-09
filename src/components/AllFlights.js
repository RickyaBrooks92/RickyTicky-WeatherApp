import React from "react";
import useAxios from "../hooks/useAxios";
import axios from "../apis/flightData";
const AllFlights = () => {
  const [flight, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/flights",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  return (
    <div>
      <h1> Flights</h1>
      {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && flight && <p>{flight?.flight} </p>}

      {!loading && !error && flight && <p>No Flight to display. </p>}
    </div>
  );
};

export default AllFlights;
