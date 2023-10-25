import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import styles from "./Character.module.css";
import axios from "axios";

const Character = (props) => {
  
  // const [pageNum, setPageNum] = useState(1)
  // const [characters, setCharacters] = useState([])
  
  const location = useLocation();
  const character = location.state;
  console.log("character", character);

  const {page} = useParams();

  console.log(page, 'page')
  // const fetchCharacters = async (url)=>{
  //   const response = await axios.get(url);
  //   if(response.data.length !== 0){
  //     setCharacters(response.data)
  //   }
  // }

  // useEffect(() => {
  //   const url = `${process.env.REACT_APP_CharactersAPI}&page=${page}`;
  //     console.log("Page clicked", page, `${process.env.REACT_APP_CharactersAPI}&page=${page}`)
  //     // Hit the API and call setData
  //     //fetchCharacters(url)
  //     fetchCharacters(url)
  // }, [page])

  const previousCharacter = ()=> {
    console.log("previous button")
  }

  const nextCharacter = ()=>{
    console.log("next button")
  }
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
                    <td>Died:</td>
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
                  <Button onClick={previousCharacter} className="btn btn-warning">≪ Previous</Button>
                </Col>
                <Col>
                  <Button onClick={nextCharacter} className="btn btn-warning">Next ≫</Button>
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
