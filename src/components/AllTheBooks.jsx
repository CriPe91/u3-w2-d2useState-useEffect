import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../Books/fantasy.json";
import history from "../Books/history.json";
import horror from "../Books/horror.json";
import romance from "../Books/romance.json";
import scifi from "../Books/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    Books: fantasy,
  };

  render() {
    return (
      <Container>
        <div className="d-flex justify-content-center my-3 gap-2">
          <Button variant="info" onClick={() => this.setState({ Books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="success" onClick={() => this.setState({ Books: history })}>
            History
          </Button>
          <Button variant="dark" onClick={() => this.setState({ Books: horror })}>
            Horror
          </Button>
          <Button variant="danger" onClick={() => this.setState({ Books: romance })}>
            Romance
          </Button>
          <Button variant="primary" onClick={() => this.setState({ Books: scifi })}>
            Scifi
          </Button>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} className="gy-3">
          {this.state.Books.map((book) => (
            <Col key={book.asin}>
              <Card className="border border-radius-2 shadow p-3 mb-5 bg-body-tertiary rounded">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <Badge bg="success">{book.price}€</Badge>
                  </Card.Text>
                  <Button variant="dark">{book.category}</Button>
                  <span>
                    <Button variant="danger" className="mx-2">
                      Buy Now
                    </Button>
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
