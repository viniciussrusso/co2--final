import { useState, useEffect } from "react";

export function Another(props) {
  const [eletricity, setEletricity] = useState();

  //Eletricity

  const requestOptions = {
    headers: {
      // Authorization: process.env.REACT_APP_API_KEY,
      Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor: "electricity-energy_source_grid_mix",
      parameters: {
        energy: parseInt(props.userInput),
        energy_unit: "kWh",
      },
    }),
  };

  async function api() {
    let response = await fetch(
      "https://beta2.api.climatiq.io/estimate",
      requestOptions
    );
    response = await response.json();

    const res = JSON.stringify(response.co2e);
    console.log(res);
    const res2 = parseFloat(res);
    setEletricity(res2);
  }
  api();

  return (
    <>
      <button onClick={() => props.change(eletricity)}>clidk </button>
    </>
  );
}

export default Another;
