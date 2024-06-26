import React from "react";
import "./Hero.css";
import { Button, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">Ivanka barber</h1>
      <Row className="hero-row-btn">
        <Col xs={2} className="offset-md-3">
          <Button block>Objednat online</Button>
        </Col>
        <Col xs={2}></Col>
        <Col xs={2}>
          <Button block>Objednat po telefonu</Button>
        </Col>
      </Row>
      <div className="hero-scroller"></div>
    </div>
  );
};

export default Hero;
