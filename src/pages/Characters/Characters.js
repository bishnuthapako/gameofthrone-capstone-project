import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Characters.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoadingContext } from "../../components/context/LoadingProvider";

const Characters = () => {
  const [page, setPage] = useState(0);
  const [characters, setCharacters] = useState([]);
const {enableLoading, disableLoading} = useContext(LoadingContext)
// console.log(characters, 'characters-api');


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(page ? `${process.env.REACT_APP_CharactersAPI}&page=${page}`: `${process.env.REACT_APP_CharactersAPI}&page=1`);
        if (response.data.length !== 0) {
          setCharacters(response.data);
        }
      } catch (error) {
        console.error("An error occurred while fetching characters:", error);
      }
    };

    async function runGetGameOfThroneCharacters(){
      enableLoading();
      await fetchCharacters();
      disableLoading();
    }

    runGetGameOfThroneCharacters()
    
  }, [page, enableLoading, disableLoading]);

  const previousCharacter = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  },[page])

  const nextCharacter = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  },[])

  return (
    <>
      <Container className={`text-white ${styles.characters}`}>
        <Row className="mt-3">
          {characters.map((character, index) => (
            <Col key={index} lg={6} md={6} sm={6} xs={12} className="mb-3 text-center text-lg-start">
              <Link
                to={`/characters/${index + 1}`}
                style={{ textDecoration: "none" }}
                state={character}
              >
                <h3>
                  {character?.aliases[0] ? character?.aliases[0] : "NA"}
                </h3>
              </Link>
              <h5>{character?.culture || "NA"}</h5>
              <h5>{character?.gender === "Male" ? "👦🏻" : "👧"}</h5>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="mb-3">
            <Button onClick={previousCharacter} className="btn btn-warning">
              ≪ Previous
            </Button>
          </Col>
          <Col>
            <Button onClick={nextCharacter} className="btn btn-warning">
              Next ≫
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Characters;
