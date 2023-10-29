import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useFetchData } from "../fetchData/useFetchData";
import styles from "./Navigation.module.css";
import logo from "../../img/logo.png";

const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useFetchData(process.env.REACT_APP_CharactersAPI);
  const [show, setShow] = useState(false);

  const characterSearch = data.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("form submit");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img className={styles.img} src={logo} alt="game of throne" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="navbar-naav ms-auto mx-auto me-2 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/characters"}>
                Characters
              </Nav.Link>
              <Nav.Link as={Link} to={"/houses"}>
                Houses
              </Nav.Link>
            </Nav>
            <Form onSubmit={handleSearch} className={`${styles.form} d-flex`}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShow(e.target.value.length > 0); // Show results if input is not empty
                }}
  
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
              {show && (
                <div
                  className={`text-end bg-danger border mt-2 rounded p-1 ${styles.characterDisplay}`}
                >
                  {characterSearch.map((character, id) => (
                    <h4 key={id} className="text-start p-1">
                      <Link
                        to={`/characters/${id + 1}`}
                        style={{ textDecoration: "none", color: "white" }}
                        state={character}
                      >
                        {character.name}
                      </Link>
                    </h4>
                  ))}
                </div>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
