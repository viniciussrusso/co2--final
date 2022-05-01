import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import InputBar from "../Input/InputBar";

const Cards = ({ style, cardTitle, text, cardId }) => {
  const cardSelection = () => {
    switch (cardId) {
      case "1":
        return <InputBar inputId={"1"}></InputBar>;
      case "2":
        return <InputBar inputId={"2"}></InputBar>;
      case "3":
        return <InputBar inputId={"3"}></InputBar>;
      case "4":
        return <InputBar inputId={"4"}></InputBar>;
      case "5":
        return <InputBar inputId={"5"}></InputBar>;
      case "6":
        return <InputBar inputId={"6"}></InputBar>;
      case "7":
        return <InputBar inputId={"7"}></InputBar>;
      case "8":
        return <InputBar inputId={"8"}></InputBar>;
      case "9":
        return <InputBar inputId={"9"}></InputBar>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Card className="card" style={style}>
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
