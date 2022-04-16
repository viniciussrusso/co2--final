import { useState } from "react";

export function Subway(props) {
  const [subway, setSubway] = useState();

  //SUBWAY
  const requestOption = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor: "passenger_train-route_subway-fuel_source_na",
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
    setSubway(res2);
  }

  api();

  return (
    <>
      <button onClick={() => props.change(subway)}>Send 6</button>
    </>
  );
}

export default Subway;
