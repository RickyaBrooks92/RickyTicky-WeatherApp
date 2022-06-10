import React, { useEffect, useState } from "react";

function FetchFlights() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch(
      "http://api.aviationstack.com/v1/flights?access_key=592d9edba6f55d3fe9a1c771a9578bc9&airline_name=Spirit Airlines"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  // useEffect(() => {
  //   apiGet();
  // }, []);

  return (
    <div>
      My API Flights <br />
      <button onClick={apiGet}> Fetch Flight Data</button>
      <br />
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchFlights;
