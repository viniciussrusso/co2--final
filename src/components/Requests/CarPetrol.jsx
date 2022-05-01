import { useState } from "react";

export function CarPetrol(props) {
  const [car, setCar] = useState();

  //CAR PETROL
  const requestOption = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor:
        "passenger_vehicle-vehicle_type_car-fuel_source_petrol-distance_short-engine_size_na",
      parameters: {
        passengers: 1,
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
    setCar(res2);
  }
  api();

  function displayResult() {
    props.change(car);
  }

  return <>{displayResult()}</>;
}

export default CarPetrol;
