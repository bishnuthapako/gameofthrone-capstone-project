import React from "react";
import { useFetchData } from "../../components/fetchData/useFetchData";
import { Container, Row, Col, Card } from "react-bootstrap";

const Houses = () => {
  const { data } = useFetchData(process.env.REACT_APP_HousesAPI);
  console.log(data, "houses");

  return (
    <Container>
      <Row className="mt-3">
        {data.length !== 0 &&
          data.map((house, index) => {
            return (
              <Col
                key={index}
                lg={6}
                xs={12}
                sm={6}
                className="d-flex mb-1 mb-sm-2"
              >
                <Card bg="secondary" border="light">
                  <Card.Body>
                    <Card.Title className="text-light">
                      {house?.name}
                    </Card.Title>
                    <blockquote className="blockquote mb-0">
                      <p className="text-warning">
                        {" "}
                        {house?.coatOfArms ? house?.coatOfArms : "NA"}{" "}
                      </p>
                      <footer className="blockquote-footer text-danger">
                        {house?.region}{" "}
                        <cite title="Source Title">Source Title</cite>
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

export default Houses;
