import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Characters.module.css";

const Characters = () => {
  return (
    <div className={styles.characters}>
      <Container className={`text-center text-white`}>
        <Row className="mt-2">
          <Col lg={3} md={3} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Hello this is heading
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eligendi!
                </Card.Text>
                <Button variant="primary">Click Here</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Characters;
