import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import JabroniGif from "../jabroni.gif";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>Try a better route, ya jabroni</h1>
            <img alt="jabroni gif always sunny" src={JabroniGif} />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
