import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { LoadingContext } from "../../components/context/LoadingProvider";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)
  const {enableLoading, disableLoading} = useContext(LoadingContext);

  console.log(houses, 'houses')
  console.log(pageNumber, 'pagenumber')


  useEffect(()=>{

  const getHouses = async () => {
    try {
      const response = await axios.get(pageNumber? `${process.env.REACT_APP_HousesAPI}&page=${pageNumber}`: `${process.env.REACT_APP_HousesAPI}&page=1`);
      if (response.data !== 0) {
        setHouses(response.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
    async function runGameOfThronehouses()
    {
      enableLoading()
      await getHouses()
      disableLoading()
    }
    runGameOfThronehouses()
  },[pageNumber, enableLoading, disableLoading])

  const handlePreviousHouse = useCallback(() => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
      console.log("previous button")
    }
  }, [pageNumber]);

  const handleNextHouse = useCallback(()=>{
      setPageNumber((prev)=> prev + 1)
      console.log("next button")
  },[])

  return (
    <Container>
      <Row className="mt-3">
        {houses.length !== 0 &&
          houses.map((house, index) => {
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
      <Row className="mb-2">
        <Col md={6} xs={6}>
          <Button onClick={handlePreviousHouse} variant="warning">Previous</Button>
        </Col>
        <Col md={6} xs={6}>
          <Button onClick={handleNextHouse} variant="warning">Next</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Houses;
