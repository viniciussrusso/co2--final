import { useState } from "react";
import Electricity from "../Requests/Electricity";
import Gas from "../Requests/Gas";
import CarPetrol from "../Requests/CarPetrol";
import Motorcycle from "../Requests/Motorcycle";
import Train from "../Requests/Train";
import Bus from "../Requests/Bus";
import Subway from "../Requests/Subway";
import Ferry from "../Requests/Ferry";

const InputBar = ({ inputId }) => {
  const [userInput, setUserInput] = useState("");
  const [eletricityRes, setElectricityRes] = useState();
  const [gasRes, setGasRes] = useState();
  const [carRes, setCardRes] = useState();
  const [motorcycleRes, setMotorcycleRes] = useState();
  const [trainRes, setTrainRes] = useState();
  const [subwayRes, setSubwayRes] = useState();
  const [busRes, setBusRes] = useState("");
  const [ferryRes, setFerryRes] = useState();
  const [total, setTotal] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const selection = () => {
    switch (inputId) {
      case "1":
        return (
          <Electricity
            userInput={userInput}
            change={(electricityRes) => setElectricityRes(electricityRes)}
          />
        );

      case "2":
        return (
          <Gas userInput={userInput} change={(gasRes) => setGasRes(gasRes)} />
        );

      case "3":
        return (
          <CarPetrol
            userInput={userInput}
            change={(carRes) => setCardRes(carRes)}
          />
        );
      case "4":
        return (
          <Motorcycle
            userInput={userInput}
            change={(motorcycleRes) => setMotorcycleRes(motorcycleRes)}
          />
        );
      case "5":
        return (
          <Train
            userInput={userInput}
            change={(trainRes) => setTrainRes(trainRes)}
          />
        );
      case "6":
        return (
          <Subway
            userInput={userInput}
            change={(subwayRes) => setSubwayRes(subwayRes)}
          />
        );

      case "7":
        return (
          <Bus userInput={userInput} change={(busRes) => setBusRes(busRes)} />
        );

      case "8":
        return (
          <Ferry
            userInput={userInput}
            change={(ferryRes) => setFerryRes(ferryRes)}
          />
        );
      case "9":
        return <></>;
      default:
        return <></>;
    }
  };

  const selectionTwo = () => {
    switch (inputId) {
      case "1":
        if (isNaN(eletricityRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {eletricityRes}</p>;
        }
      case "2":
        if (isNaN(gasRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {gasRes}</p>;
        }
      case "3":
        if (isNaN(carRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {carRes}</p>;
        }
      case "4":
        if (isNaN(motorcycleRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {motorcycleRes}</p>;
        }
      case "5":
        if (isNaN(trainRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {trainRes}</p>;
        }
      case "6":
        if (isNaN(subwayRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {subwayRes}</p>;
        }
      case "7":
        if (isNaN(busRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {busRes}</p>;
        }
      case "8":
        if (isNaN(ferryRes)) {
          return <p>Total CO2/kg: 0</p>;
        } else {
          return <p>Total CO2/kg: {ferryRes}</p>;
        }

      default:
        return <></>;
    }
  };

  const a = () => {
    if (
      inputId === "1" ||
      inputId === "2" ||
      inputId === "3" ||
      inputId === "4" ||
      inputId === "5" ||
      inputId === "6" ||
      inputId === "7" ||
      inputId === "8"
    ) {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </form>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      {a()}
      {selection()}
      {selectionTwo()}
    </>
  );
};

export default InputBar;
