import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";

import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   FilterQuery: "",
  //   selectedAsin: "",
  // };

  const [FilterQuery, setFilterQuery] = useState;

  const [selectedAsin, setSelectedAsin] = useState;

  const changeSelectedAsin = (newAsin) => {
    this.setState({ selectedAsin: newAsin });
  };

  return (
    <>
      <Row className="justify-content-center mb-3">
        <Col xs={4}>
          <Form.Control type="text" placeholder="cerca i tuoi libri" value={FilterQuery} onChange={(e) => setFilterQuery({ FilterQuery: e.target.value })} />
        </Col>
      </Row>

      <Row>
        <Col md={9}>
          <Row>
            {props.books
              .filter((book) => book.title.toLowerCase().includes(FilterQuery.toLowerCase()))
              .map((book) => (
                <Col key={book.asin} sm={4} lg={4}>
                  <SingleBook book={book} changeSelectedAsin={changeSelectedAsin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={3}>
          <CommentArea asin={setSelectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
