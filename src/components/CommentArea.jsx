import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  // state = {
  //   reviews: [],
  // };

  const [reviews, setReviews] = useState([]);

  const getReview = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmEwYjA2ZmM4YzAwMTU2Yjg2ZWMiLCJpYXQiOjE3MzI3OTg5ODcsImV4cCI6MTczNDAwODU4N30.PFiu_jBim2Z29_yOl7A95HKUOfOLmYgg8QGNiIcvLkg",
      },
    })
      .then((resp) => resp.json())
      .then((reviews) => {
        setReviews({ reviews });
      });
  };

  // useEffect(()=> {
  //   getReview();
  // },[]);

  useEffect((prevProps) => {
    if (prevProps.asin !== props.asin) {
      getReview();
    } else {
      console.log("commenti non cambiati!!");
    }
  });

  return (
    <>
      <p>Sono COMMENT AREA</p>
      <CommentList reviews={reviews} />
      <AddComment asin={props.asin} />
    </>
  );
};

export default CommentArea;
