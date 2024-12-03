import { useState } from "react";
import { Card, Container } from "react-bootstrap";

const SingleBook = () => {
  // state = {
  //   selected: false,
  // };

  const [selected, setSelected] = useState;

  return (
    <Container>
      <Card className={this.state.selected ? "border-danger" : ""}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
            this.props.changeSelectedAsin(this.props.book.asin);
          }}
        />

        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleBook;
