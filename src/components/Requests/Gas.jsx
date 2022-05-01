import { useState } from "react";

export function Another(props) {
  const [gas, setGas] = useState();

  //Gas

  const requestOption = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor: "fuel_type_gas_oil-fuel_use_na",
      parameters: {
        volume: parseInt(props.userInput),
        volume_unit: "m3",
      },
    }),
  };

  async function api2() {
    let response = await fetch(
      "https://beta2.api.climatiq.io/estimate",
      requestOption
    );
    response = await response.json();

    const res = JSON.stringify(response.co2e);
    const res2 = parseFloat(res);
    setGas(res2);
  }
  api2();

  function displayResult() {
    props.change(gas);
  }

  return <>{displayResult()}</>;
}

export default Another;
