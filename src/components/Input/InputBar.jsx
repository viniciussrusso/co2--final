import { useState } from "react";
import Electricity from "../Requests/Electricity";
import Gas from "../Requests/Gas";
import CarPetrol from "../Requests/CarPetrol";
import Motorcycle from "../Requests/Motorcycle";
import Train from "../Requests/Train";
import Bus from "../Requests/Bus";
import Subway from "../Requests/Subway";
import Ferry from "../Requests/Ferry";
import Results from "../Results/Results";

const InputBar = ({ inputId }) => {
  const [userInput, setUserInput] = useState("");
  const [eletricityRes, setElectricityRes] = useState(0);
  const [gasRes, setGasRes] = useState(0);
  const [carRes, setCardRes] = useState(0);
  const [motorcycleRes, setMotorcycleRes] = useState(0);
  const [trainRes, setTrainRes] = useState(0);
  const [subwayRes, setSubwayRes] = useState(0);
  const [busRes, setBusRes] = useState(0);
  const [ferryRes, setFerryRes] = useState(0);

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
          <>
            <Ferry
              userInput={userInput}
              change={(ferryRes) => setFerryRes(ferryRes)}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  const selectionTwo = () => {
    switch (inputId) {
      case "1":
        return <p>Total CO2/kg: {eletricityRes}</p>;
      case "2":
        return <p>Total CO2/kg: {gasRes}</p>;
      case "3":
        return <p>Total CO2/kg: {carRes}</p>;
      case "4":
        return <p>Total CO2/kg: {motorcycleRes}</p>;
      case "5":
        return <p>Total CO2/kg: {trainRes}</p>;
      case "6":
        return <p>Total CO2/kg: {subwayRes}</p>;
      case "7":
        return <p>Total CO2/kg: {busRes}</p>;
      case "8":
        return <p>Total CO2/kg: {ferryRes}</p>;

      default:
        return <></>;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {selection()}
        {selectionTwo()}
      </form>
    </>
  );
};

export default InputBar;
