import React from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: "20%" }}>
        <Col xs={6}>
          <Form>
            <Row>
              <Col>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-pill w-80"
                    aria-label="Search"
                    onChange={() => {}}
                  />
                  <Button
                    className="rounded-pill"
                    variant="outline-primary"
                    onClick={() => {}}
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
                <Button variant="outline-primary">SELL</Button>
              </Col>
              <Col xs={4}>
                <Button variant="outline-primary">BUY</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
