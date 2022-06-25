import React from "react";
// import AllFlights from "./AllFlights";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import FetchFlights from "./FetchFlights";
import CitySearch from "./CitySearch";
const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to={"/"}>Current Weather</Link>
          {/* <Link to={"/flights"}>All Flights</Link> */}
        </nav>
        <Routes>
          <Route exact path="/" element={<CitySearch />} />
          {/* <Route exact path="/flights" element={<AllFlights />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
