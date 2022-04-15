import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import InputBar from "../Input/InputBar";

const Cards = ({ cardTitle, text, cardId }) => {
  const cardSelection = () => {
    switch (cardId) {
      case "1":
        return <InputBar inputId={"1"}></InputBar>;

      case "2":
        return <InputBar inputId={"2"}></InputBar>;
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
      <Card className="card">
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {cardSelection()}
        </Card.Body>
      </Card>
    </>
  );
};
export default Cards;
