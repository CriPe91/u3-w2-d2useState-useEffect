import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = () => (
  <>
    <Alert variant="info" className="d-flex justify-content-center">
      <Alert.Link href="#"></Alert.Link> Give it a click if you like.
    </Alert>
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Tutte le catogorie di libri nel nostro store</h1>
          <h3>Acquista nella libreria i nostri Best Seller</h3>
        </Col>
      </Row>
    </Container>
  </>
);
export default Welcome;
