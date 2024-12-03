import { Badge, ListGroup } from "react-bootstrap";

const CommentList = ({ reviews }) => (
  <>
    <h5 className="mt-2">RECENSIONI:</h5>
    <ListGroup>
      {reviews.map((review) => (
        <ListGroup.Item className="d-flex align-items-center flex-wrap">
          <span>{review.author}</span>
          <span>{review.comment}</span>-{" "}
          <span>
            <Badge variant="dark">{review.rate}</Badge>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>,
);
export default CommentList;
