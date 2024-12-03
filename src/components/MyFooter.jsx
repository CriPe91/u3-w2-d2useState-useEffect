import { Col, Container, Form, Row } from "react-bootstrap";

const MyFooter = () => (
  <Container className="bg-dark text-white">
    <h2 className="text-center">Condividi la tua esperienza!</h2>
    <Row>
      <Col>
        <Form className="text-center">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="text-center" type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
);
export default MyFooter;
