import React from "react";

function FetchFlights() {
  const apiGet = () => {
    fetch("https://app.goflightlabs.com/flights?access_key=YOUR_ACCESS_KEY")
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

export default FetchFlights;
