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

  //const [userInput, setUserInput] = useState("");

  console.log(props.userInput);
  console.log(eletricity);
  //Eletricity
  const handleSubmit = (evt) => {
    evt.preventDefault();

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
  };

  useEffect(() => {
    //GAS
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

    //CAR PETROL
    const requestOption3 = {
      headers: {
        // Authorization: process.env.REACT_APP_API_KEY,
        Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
      },
      method: "post",
      responseType: "json",
      body: JSON.stringify({
        emission_factor:
          "passenger_vehicle-vehicle_type_car-fuel_source_petrol-distance_short-engine_size_na",
        parameters: {
          passengers: 1,
          distance: 100,
          distance_unit: "km",
        },
      }),
    };

    async function api3() {
      let response = await fetch(
        "https://beta2.api.climatiq.io/estimate",
        requestOption3
      );
      response = await response.json();

      const res = JSON.stringify(response.co2e);
      const res2 = parseFloat(res);
      setCar(res2);
    }

    //MOTORCYCLE
    const requestOption4 = {
      headers: {
        // Authorization: process.env.REACT_APP_API_KEY,
        Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
      },
      method: "post",
      responseType: "json",
      body: JSON.stringify({
        emission_factor:
          "passenger_vehicle-vehicle_type_motorcycle-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
        parameters: {
          distance: 22,
          distance_unit: "km",
        },
      }),
    };

    async function api4() {
      let response = await fetch(
        "https://beta2.api.climatiq.io/estimate",
        requestOption4
      );
      response = await response.json();

      const res = JSON.stringify(response.co2e);
      const res2 = parseFloat(res);
      setMotorcycle(res2);
    }

    //TRAIN
    const requestOption5 = {
      headers: {
        // Authorization: process.env.REACT_APP_API_KEY,
        Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
      },
      method: "post",
      responseType: "json",
      body: JSON.stringify({
        emission_factor:
          "passenger_train-route_type_commuter_rail-fuel_source_na",
        parameters: {
          distance: 100,
          distance_unit: "km",
        },
      }),
    };

    async function api5() {
      let response = await fetch(
        "https://beta2.api.climatiq.io/estimate",
        requestOption5
      );
      response = await response.json();

      const res = JSON.stringify(response.co2e);
      const res2 = parseFloat(res);
      setTrain(res2);
    }

    //SUBWAY
    const requestOption6 = {
      headers: {
        // Authorization: process.env.REACT_APP_API_KEY,
        Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
      },
      method: "post",
      responseType: "json",
      body: JSON.stringify({
        emission_factor: "passenger_train-route_subway-fuel_source_na",
        parameters: {
          distance: 100,
          distance_unit: "km",
        },
      }),
    };

    async function api6() {
      let response = await fetch(
        "https://beta2.api.climatiq.io/estimate",
        requestOption6
      );
      response = await response.json();

      const res = JSON.stringify(response.co2e);
      const res2 = parseFloat(res);
      setSubway(res2);
    }
    //BUS
    const requestOption7 = {
      headers: {
        // Authorization: process.env.REACT_APP_API_KEY,
        Authorization: "Bearer VT2MVX6BQRMQMBNBRF9CF61KFWXG",
      },
      method: "post",
      responseType: "json",
      body: JSON.stringify({
        emission_factor:
          "passenger_vehicle-vehicle_type_local_bus-fuel_source_na-distance_na-engine_size_na",
        parameters: {
          distance: 100,
          distance_unit: "km",
        },
      }),
    };

    async function api7() {
      let response = await fetch(
        "https://beta2.api.climatiq.io/estimate",
        requestOption7
      );
      response = await response.json();

      const res = JSON.stringify(response.co2e);
      const res2 = parseFloat(res);
      setBus(res2);
    }

    //BUS
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
  }, [props.userInput]);

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>Enter a number:</label>
    //   <input
    //     type="text"
    //     value={userInput}
    //     onChange={(e) => setUserInput(e.target.value)}
    //   />
    //   <h1>{eletricity}</h1>
    //   <button type="submit">send</button>
    // </form>

    <div>
      <h1>{gas}</h1>
    </div>
  );
}

export default Input;
