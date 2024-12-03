import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   review: {
  //     comment: "",
  //     rate: "1",
  //     elementId: this.props.asin,
  //   },
  // };

  const [review, setReview] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmEwYjA2ZmM4YzAwMTU2Yjg2ZWMiLCJpYXQiOjE3MzI3OTg5ODcsImV4cCI6MTczNDAwODU4N30.PFiu_jBim2Z29_yOl7A95HKUOfOLmYgg8QGNiIcvLkg",
      },
    }).then((response) => {
      if (response.ok) {
        alert("commento inviato");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="raiting">
        <Form.Label>Recensisci il libro selezionato</Form.Label>
        <Form.Select aria-label="Quanto lo consigli?" value={review.rate} onChange={(e) => setReview({ review: { ...review, rate: e.target.value } })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Scrivi il tuo commento...</Form.Label>
        <Form.Control as="textarea" rows={1} value={review.comment} onChange={(e) => setReview({ review: { ...review, comment: e.target.value } })} />
      </Form.Group>
      <Button type="submit" variant="warning" className="border-radius">
        Invia Recensione
      </Button>
    </Form>
  );
};

export default AddComment;
