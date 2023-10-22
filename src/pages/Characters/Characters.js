import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Characters.module.css";
import Paginations from "../../components/Pagination/Paginations";

const Characters = ({ data }) => {
  console.log(data, "char-data");

  return (
    <>
      <Container className={`text-white ${styles.characters}`}>
        <Row className="mt-3">
          {data.length !== 0 &&
            data.map((items, index) => {
              return (
                <Col key={index} lg={6} md={6} sm={6} xs={12} className="mb-3">
                  <h1>{items.aliases[0]}</h1>
                  <h5>{items.gender}</h5>
                </Col>
              );
            })}
        </Row>
        <Row>
          <Paginations />
        </Row>
      </Container>
    </>
  );
};

export default Characters;
