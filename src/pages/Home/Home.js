import React from "react";
// import styles from "../Home/House.module.css";
import { useFetchData } from "../../components/fetchData/useFetchData";
import { Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const { data } = useFetchData(process.env.REACT_APP_HousesAPI);

  return (
    <Container className="text-center">
      <Row className="mt-2">
        {data.length !== 0 &&
          data.map((house, index) => {
            return (
              <Col key={index} md={12} xs={12} className="mb-1">
                <Card style={{ backgroundColor: "transparent" }} border="none">
                  <Card.Body>
                    <Card.Header>
                      <h3>{house?.name}</h3>
                    </Card.Header>
                    <blockquote className="blockquote mb-0">
                      <p className="text-warning">
                        {" "}
                        {house?.coatOfArms ? house?.coatOfArms : "NA"}{" "}
                      </p>
                      <footer className="blockquote-footer text-danger">
                        {house?.region}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Home;
