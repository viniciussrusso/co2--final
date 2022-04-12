import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import InputBar from "./components/Input/InputBar";
import { Another } from "./components/Input/Another";

function App(props) {
  return (
    <Container fluid>
      <Header className="header-s" />
      <Row>
        <InputBar></InputBar>
        <Col>
          <Cards
            cardTitle={"Electricity"}
            text={"Please enter your monthly total in kWh"}
          />
          <Another></Another>
        </Col>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
