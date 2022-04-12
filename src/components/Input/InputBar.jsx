import { useState } from "react";
import Another from "./Another";
import Another2 from "./Another2";
import { Card } from "react-bootstrap";

const InputBar = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter a number:</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>

        <Another userInput={userInput} />
        <Another2 userInput={userInput} />
      </form>
    </>
  );
};

export default InputBar;
