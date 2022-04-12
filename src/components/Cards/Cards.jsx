import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import InputBar from "../Input/InputBar";

const Cards = ({ cardTitle, text }) => {
  return (
    <>
      <Card className="card">
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Cards;
