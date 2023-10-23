import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Characters.module.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useFetchData } from "../../components/fetchData/useFetchData";
import axios from "axios";

const Characters = () => {
  const { data, setData } = useFetchData(process.env.REACT_APP_CharactersAPI);
  // console.log(data, "char-data");

  // paginations section
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState([])

  console.log(characters, 'charData')
  const fetchCharacters = async (url)=>{
    const response = await axios.get(url);
    if(response.data.length !== 0){
      setCharacters(response.data)
    }
  }

  useEffect(() => {
    const url = `${process.env.REACT_APP_CharactersAPI}&page=${page}`;
      console.log("Page clicked", page, `${process.env.REACT_APP_CharactersAPI}&page=${page}`)
      // Hit the API and call setData
      //fetchCharacters(url)
      fetchCharacters(url)
  }, [page])

  const handlePrevClick = (event) => {
    setPage(page - 1);
    console.log(event.selected, "checked");
  };

  const handleNextClick = (event) => {
    setPage(page + 1);
    console.log(event.selected, "checked");
  };

  return (
    <>
      <Container className={`text-white ${styles.characters}`}>
        <Row className="mt-3">
          {data.length !== 0 &&
            data.map((character, index) => {
              return (
                <Col key={index} lg={6} md={6} sm={6} xs={12} className="mb-3">
                  <Link to={`/characters/${index + 1}`} style={{textDecoration: "none"}} state={character}>
                    <h1>{character?.aliases[0]}</h1>
                  </Link>
                  <h5>{character?.gender}</h5>
                </Col>
              );
            })}
        </Row>
        {/* <Row>
          <Col>
            <ReactPaginate
              // containerClassName="pagination"
              // pageClassName="page-item"
              // pageLinkClassName="page-link"
              // breakAriaLabels="..."
              // nextLabel=">>"
              // pageRangeDisplayed={4}
              // pageCount={10}
              // previousLabel="<<"
              // breakClassName="page-item"
              // breakLinkClassName="page-link"
              // onPageChange={handlePageCount}
              // renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              breakLabel="..."
              nextLabel="next >"
              onPageChange={"handlePageClick"}
              pageRangeDisplayed={5}
              pageCount={5}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </Col>
        </Row> */}
        <Row>
          <button className="prev" onClick={handlePrevClick}>Prev</button>
          <button className="next" onClick={handleNextClick}>Next</button>
        </Row>
      </Container>
    </>
  );
};

export default Characters;
