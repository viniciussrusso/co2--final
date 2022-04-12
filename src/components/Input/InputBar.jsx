import { useState } from "react";
import Another from "./Another";

const InputBar = () => {
  const [userInput, setUserInput] = useState("");
  const [resu, setResu] = useState(0);

  console.log(userInput);
  console.log();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter a number {resu}</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>

        <Another userInput={userInput} changeRes={(resu) => setResu(resu)} />
        <h1>{resu}</h1>
      </form>
    </>
  );
};

export default InputBar;
