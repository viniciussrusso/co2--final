import { useState } from "react";

export function Electricity(props) {
  const [eletricity, setEletricity] = useState();

  //Eletricity

  const requestOptions = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
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
    const res2 = parseFloat(res);
    setEletricity(res2);
  }
  api();

  function displayResult() {
    props.change(eletricity);
  }

  return <>{displayResult()}</>;
}

export default Electricity;
