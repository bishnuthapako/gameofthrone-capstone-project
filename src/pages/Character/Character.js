import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import styles from "./Character.module.css";
import axios from "axios";

const Character = (props) => {
 

  const location = useLocation();
  const character = location.state;
  console.log("character", character);
  const { id } = useParams();

  const [pageNum, setPageNum] = useState(id)
  const [characters, setCharacters] = useState([])
  const url = `${process.env.REACT_APP_CharactersAPI}&page=${pageNum}`
  console.log(url, 'details')

  const previousCharacter = () => {
    console.log("previous button");
  };

  const nextCharacter = () => {
    console.log("next button");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col
            lg={12}
            xs={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="mt-3"
              style={{
                width: "60%",
                backgroundColor: "white",
                borderRadius: "20px",
              }}
            >
              <button className="btn btn-lg btn-danger mt-2">
                <h1 style={{ color: "white" }}>{character?.aliases[0]}</h1>
              </button>
              <Table className="mt-3" responsive striped bordered hover style={{padding: "10px"}}>
               <tbody>
               <tr>
                  <td style={{ width: "300px", padding: "5px" }}>Culture:</td>
                  <td style={{ width: "auto" }}>
                    {character?.culture ? character?.culture : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Name:</td>
                  <td style={{ width: "auto" }}>
                    {character?.name ? character?.name : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px" }}>Gender:</td>
                  <td style={{ width: "auto" }}>
                    {character?.gender ? character?.gender : "NA"}
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Born:</td>
                  <td style={{ width: "auto" }}>
                    {character?.born ? character?.born : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Died:</td>
                  <td style={{ width: "auto" }}>
                    {character?.died ? character?.died : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Title:</td>
                  <td style={{ width: "auto" }}>
                    {character?.titles[0] ? character?.titles[0] : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Aliases:</td>
                  <td style={{ width: "auto" }}>
                    {character?.aliases[0] ? character?.aliases[0] : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Father:</td>
                  <td style={{ width: "auto" }}>
                    {character?.father ? character?.father : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Mother:</td>
                  <td style={{ width: "auto" }}>
                    {character?.mother ? character?.mother : "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "300px", padding: "5px"  }}>Spouse:</td>
                  <td style={{ width: "auto" }}>
                    {character?.spouse ? character?.spouse : "NA"}
                  </td>
                </tr>
               </tbody>
              </Table>
            </div>
          </Col>
          <Col
            lg={12}
            xs={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="mt-2"
              style={{
                width: "60%",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Row>
                <Col>
                  <Button
                    onClick={previousCharacter}
                    className="btn btn-warning"
                  >
                    ≪
                  </Button>
                </Col>
                <Col>
                  <Button onClick={nextCharacter} className="btn btn-warning">
                    ≫
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Character;
