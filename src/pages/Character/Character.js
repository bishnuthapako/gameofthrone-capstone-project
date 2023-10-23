import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import styles from "./Character.module.css";

const Character = (props) => {
  const location = useLocation();
  const character = location.state;
  console.log("character", character);
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
                <h1 style={{color: "white"}}>{character?.aliases[0]}</h1>
              </button>
              <Table
                className="mt-3 text-left P-4"
                responsive
                striped
                bordered
                hover
                style={{
                  width: "100%",
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <tbody>
                  <tr>
                    <td className={styles.tdStyle}>Culture:</td>
                    <td>{character?.culture ? character?.culture : "NA"}</td>
                  </tr>
                  <tr>
                    <td className={styles.tdStyle}>Name:</td>
                    <td>{character?.name ? character?.name : "NA"}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{character?.gender ? character?.gender : "NA"}</td>
                  </tr>
                  <tr>
                    <td>Born:</td>
                    <td>{character?.born ? character?.born : "NA"}</td>
                  </tr>
                  <tr>
                    <td>Died</td>
                    <td>{character?.died ? character?.died : "NA"}</td>
                  </tr>
                  <tr>
                    <td>Title:</td>
                    <td>
                      {character?.titles[0] ? character?.titles[0] : "NA"}
                    </td>
                  </tr>
                  <tr>
                    <td>Aliases:</td>
                    <td>
                      {character?.aliases[0] ? character?.aliases[0] : "NA"}
                    </td>
                  </tr>
                  <tr>
                    <td>Father:</td>
                    <td>{character?.father ? character?.father : "NA"}</td>
                  </tr>
                  <tr>
                    <td>Mother:</td>
                    <td>{character?.mother ? character?.mother : "NA"}</td>
                  </tr>
                  <tr>
                    <td>Spouse:</td>
                    <td>{character?.spouse ? character?.spouse : "NA"}</td>
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
                  <Button className="btn btn-warning">Previous</Button>
                </Col>
                <Col>
                  <Button className="btn btn-warning">Next</Button>
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
