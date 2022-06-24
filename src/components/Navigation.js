import React from "react";
import AllFlights from "./AllFlights";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FetchFlights from "./FetchFlights";
import CitySearch from "./CitySearch";
const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <p>Welcome!</p>
          <Link to={"/"}>Home</Link>
          <Link to={"/flights"}>All Flights</Link>
          <Link to={"/getFlights"}>Get Flight Data</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<CitySearch />} />
          <Route exact path="/flights" element={<AllFlights />} />
          <Route exact path="/getFlights" element={<FetchFlights />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
