import React from "react";
import "./About.css";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <div className="about">
      <Container>
        <div className="about-section">
          <h2 className="section-heading">O nás</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            facere maiores. Fuga optio id laudantium enim praesentium,
            explicabo, earum odit, reprehenderit amet saepe illum est
            consequatur quibusdam minus voluptas vitae.
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          nihil soluta veniam minima magnam culpa enim, nesciunt dolore sed sint
          nulla molestiae quae necessitatibus sapiente officiis temporibus minus
          vero ullam nostrum ab ad tempore, ex mollitia. Sed suscipit corrupti
          facilis cum, neque dolor nostrum recusandae necessitatibus labore
          dolore quod tempora!
        </div>
        <Row className="mt-5">
          <Col>
            <div className="foto"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facere eum dignissimos dolorem dolores esse reiciendis a saepe?
              Mollitia molestiae corporis consectetur in temporibus expedita qui
              iste accusamus adipisci tempora.
            </p>
          </Col>
          <Col>
            <div className="foto"></div>
            <h2>Lorem ipsum dolor Soluta!</h2>
          </Col>
          <Col>
            <div className="foto"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facere eum dignissimos dolorem dolores esse reiciendis a saepe?
              Mollitia molestiae corporis consectetur in temporibus expedita qui
              iste accusamus adipisci tempora.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
