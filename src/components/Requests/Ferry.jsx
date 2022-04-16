import { useState } from "react";

export function Ferry(props) {
  const [ferry, setFerry] = useState(0);

  //FERRY
  const requestOption = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor: "passenger_ferry-route_type_na-fuel_source_na",
      parameters: {
        distance: parseInt(props.userInput),
        distance_unit: "km",
      },
    }),
  };

  async function api() {
    let response = await fetch(
      "https://beta2.api.climatiq.io/estimate",
      requestOption
    );
    response = await response.json();

    const res = JSON.stringify(response.co2e);
    const res2 = parseFloat(res);
    setFerry(res2);
  }

  api();

  return (
    <>
      <button onClick={() => props.change(ferry)}>Send 8</button>
    </>
  );
}

export default Ferry;
