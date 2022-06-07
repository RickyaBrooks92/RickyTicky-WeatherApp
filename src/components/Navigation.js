import React from "react";
import AllFlights from "./AllFlights";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <p>Welcome!</p>
          <Link to={"/"}>Home</Link>
          <Link to={"/flights"}>All Flights</Link>
        </nav>
        <Routes>
          <Route exact path="/flights" element={<AllFlights />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
