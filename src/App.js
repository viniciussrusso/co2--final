import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App(props) {
  return (
    <Container fluid>
      <Header className="header-s" />
      <Row>
        <Col>
          <Cards
            cardTitle={"Electricity"}
            text={"Please enter your monthly total in kWh"}
            cardId={"1"}
          />
        </Col>
        <Col>
          <Cards
            cardTitle={"Gas"}
            text={"Please enter your monthly gas in M3"}
            cardId={"2"}
          />
        </Col>
        <Col>
          <Cards
            cardTitle={"Petrol Car"}
            text={"Please enter your monthly KM"}
            cardId={"3"}
          />
        </Col>
        <Col>
          <Cards
            cardTitle={"Petrol Motorcycle"}
            text={"Please enter your monthly KM"}
            cardId={"4"}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards
            cardTitle={"Train"}
            text={"Please enter your monthly train usage in KM"}
            cardId={"5"}
          />
        </Col>
        <Col>
          <Cards
            cardTitle={"Subway"}
            text={"Please enter your monthly gas in M3"}
            cardId={"6"}
          />
        </Col>
        <Col>
          <Cards
            cardTitle={"Bus"}
            text={"Please enter your monthly KM"}
            cardId={"7"}
          />
        </Col>
        <Col>
          <Cards
            cardTitle={"Ferry"}
            text={"Please enter your monthly KM"}
            cardId={"8"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
