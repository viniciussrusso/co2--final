import { useState } from "react";

export function Train(props) {
  const [train, setTrain] = useState();

  //TRAIN
  const requestOption5 = {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
    method: "post",
    responseType: "json",
    body: JSON.stringify({
      emission_factor:
        "passenger_train-route_type_commuter_rail-fuel_source_na",
      parameters: {
        distance: parseInt(props.userInput),
        distance_unit: "km",
      },
    }),
  };

  async function api() {
    let response = await fetch(
      "https://beta2.api.climatiq.io/estimate",
      requestOption5
    );
    response = await response.json();

    const res = JSON.stringify(response.co2e);
    const res2 = parseFloat(res);
    setTrain(res2);
  }

  api();

  function displayResult() {
    props.change(train);
  }

  return <>{displayResult()}</>;
}

export default Train;
