import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import moment from "moment";

import MovieDataService from "../../services/movies";

const Movie = ({ user }) => {
  let params = useParams();

  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: [],
  });

  const handleDelete = useCallback(
    (review_id, user_id) => {
      const data = {
        review_id: review_id,
        user_id: user_id,
      };
      MovieDataService.deleteReview(data)
        .then((response) => {
          setMovie((prevState) => ({
            ...prevState,
            reviews: prevState.reviews.filter(
              (review) => review._id !== review_id
            ),
          }));
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [setMovie]
  );

  useEffect(() => {
    const getMovie = (id) => {
      MovieDataService.get(id)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getMovie(params.id);
  }, [params.id]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="poster">
              <Image
                className="bigPicture"
                src={movie.poster + "100px250"}
                fluid
                onError={(e) => {
                  e.target.src = "/images/NoPosterAvailable.jpg";
                }}
              />
            </div>
          </Col>
          <Col>
            <Card>
              <Card.Header as={"h5"}>{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {user && (
                  <Link to={"/movies/" + params.id + "/review"}>
                    Add Review
                  </Link>
                )}
              </Card.Body>
            </Card>
            <h2>Reviews</h2>
            <br />
            {movie.reviews.map((review, index) => {
              return (
                <div className="d-flex" key={index}>
                  <div className="flex-shrink-0 reviewsText">
                    <h5>
                      {review.name + " reviewed on "}
                      {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p className="review">{review.review}</p>
                    {user && user.googleId === review.user_id && (
                      <Row>
                        <Col>
                          <Link
                            to={{
                              pathname: "/movies/" + params.id + "/review/",
                            }}
                            state={{
                              currentReview: review,
                            }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button
                            variant="link"
                            onClick={() => {
                              handleDelete(review._id, user.googleId);
                            }}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    )}
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;
