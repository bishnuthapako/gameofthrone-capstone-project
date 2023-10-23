import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const Character = (props) => {
  const location = useLocation()
  const character = location.state
  console.log("PROPS", props, character)
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} xs={12} sm={12} style={{display: "flex", justifyContent: "center"}}>
            <div className="mt-3 text-center" style={{height: "500px", width: "70%", backgroundColor: "white", borderRadius: "15px"}}>
              <h1>This is Character: {character?.gender} {' '} {character?.culture}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Character;
