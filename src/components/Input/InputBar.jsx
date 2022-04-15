import { useState } from "react";
import Another from "../Requests/Electricity";
import Gas from "../Requests/Gas";

const InputBar = ({ inputId }) => {
  const [userInput, setUserInput] = useState("");
  const [resu, setResu] = useState(0);
  const [gasRes, setGasRes] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const selection = () => {
    switch (inputId) {
      case "1":
        return (
          <Another userInput={userInput} change={(resu) => setResu(resu)} />
        );

      case "2":
        return (
          <Gas userInput={userInput} change={(gasRes) => setGasRes(gasRes)} />
        );
      case "3":
        return (
          <>
            <h1>{"anot"}</h1>
          </>
        );
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
        {resu + " " + gasRes}
      </form>
    </>
  );
};

export default InputBar;
