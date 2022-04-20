import { useState } from "react";

export function Bus(props) {
  const [bus, setBus] = useState();

  //BUS
  const requestOption = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor:
        "passenger_vehicle-vehicle_type_local_bus-fuel_source_na-distance_na-engine_size_na",
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
    setBus(res2);
  }
  api();

  return (
    <>
      <button onClick={() => props.change(bus)}>Send </button>
    </>
  );
}

export default Bus;
