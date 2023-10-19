import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Characters.module.css";

const Characters = ({ data }) => {
  console.log(data, "char-data");

  return (
    <Container className={`text-center text-white ${styles.characters}`}>
      <Row className="mt-3">
        {data.length !== 0 && data.map((items, index) => {
          return (
            <Col lg={6} md={6} sm={6} xs={12} className="mb-3">
              <h1>{items.aliases[0]}</h1>
              <h5>{items.gender}</h5>
              {/* <Card className="bg-secondary">
                <Card.Body>
                  <Card.Title>{items.culture}</Card.Title>
                  <Card.Text>
                    {items.aliases[0]}
                  </Card.Text>
                </Card.Body>
              </Card> */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Characters;
