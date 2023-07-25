import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleInputChange = (event) => {
    // event.target.value 包含当前输入框内的文字
    const inputText = event.target.value;
    setKeyword(inputText);
  };

  const handleSearch = () => {
    if (keyword === "") {
      navigate();
    } else {
      navigate(`/movies/?category=${keyword}`);
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: "20%" }}>
        <Col xs={6}>
          <Row>
            <Col>
              <Form
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-pill w-80"
                  aria-label="Search"
                  onChange={handleInputChange}
                />
                <Button
                  className="rounded-pill"
                  variant="outline-primary"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "10%" }}
          >
            <Col xs={4}>
              <Button
                variant="outline-primary"
                onClick={() =>
                  keyword === ""
                    ? navigate("/movies")
                    : navigate(`/movies/?category=${keyword}`)
                }
              >
                BUY
              </Button>
            </Col>
            <Col xs={4}>
              <Button
                variant="outline-primary"
                onClick={() => {
                  navigate("/add");
                }}
              >
                SELL
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
