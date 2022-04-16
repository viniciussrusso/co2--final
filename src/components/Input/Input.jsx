import { useState, useEffect } from "react";

//Here it was a function before - in case need to change
function Input(props) {
  const [eletricity, setEletricity] = useState();
  const [gas, setGas] = useState();
  const [car, setCar] = useState();
  const [motorcycle, setMotorcycle] = useState();
  const [train, setTrain] = useState();
  const [subway, setSubway] = useState();
  const [bus, setBus] = useState();
  const [ferry, setFerry] = useState();

  useEffect(() => {
    //FERRY
    const requestOption8 = {
      headers: {
        // Authorization: process.env.REACT_APP_API_KEY,
        Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
      },
      method: "post",
      responseType: "json",
      body: JSON.stringify({
        emission_factor: "passenger_ferry-route_type_na-fuel_source_na",
        parameters: {
          distance: 100,
          distance_unit: "km",
        },
      }),
    };

    async function api8() {
      let response = await fetch(
        "https://beta2.api.climatiq.io/estimate",
        requestOption8
      );
      response = await response.json();

      const res = JSON.stringify(response.co2e);
      const res2 = parseFloat(res);
      setFerry(res2);
    }

    api3();
    api4();
    api5();
    api6();
    api7();
    api8();
  }, []);
}

export default Input;
