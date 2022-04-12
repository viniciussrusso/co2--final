import { useState } from "react";
import InputBar from "./InputBar";

export function Another(props) {
  const [eletricity, setEletricity] = useState();
  //console.log("eletricidade" + eletricity);

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

  async function api1() {
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
  api1();

  return (
    <>
      <button onClick={() => props.changeRes(eletricity)}>clidk </button>
    </>
  );
}

export default Another;
