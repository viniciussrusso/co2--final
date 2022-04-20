import { useState } from "react";

export function Motorcycle(props) {
  const [motorcycle, setMotorcycle] = useState();

  //MOTORCYCLE
  const requestOption = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor:
        "passenger_vehicle-vehicle_type_motorcycle-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
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
    setMotorcycle(res2);
  }

  api();

  return (
    <>
      <button onClick={() => props.change(motorcycle)}>Send </button>
    </>
  );
}

export default Motorcycle;
