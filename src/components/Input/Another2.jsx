import { useState } from "react";

export function Another2(props) {
  const [gas, setGas] = useState();
  console.log("gas" + gas);

  const requestOption2 = {
    headers: {
      // Authorization: process.env.REACT_APP_API_KEY,
      Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
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
      requestOption2
    );
    response = await response.json();

    const res = JSON.stringify(response.co2e);
    const res2 = parseFloat(res);
    setGas(res2);
  }

  api2();
}

export default Another2;