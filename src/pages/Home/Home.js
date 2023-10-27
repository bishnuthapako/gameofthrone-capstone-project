import React from "react";
import styles from "../Home/House.module.css";
import { useFetchData } from "../../components/fetchData/useFetchData";
import { Card, Col, Container, Row } from "react-bootstrap";

const Home = (props) => {
  const { data } = useFetchData(process.env.REACT_APP_HousesAPI);

  return (
    <Container className="text-center">
      <Row className="mt-2">
        {data.length !== 0 &&
          data.map((house, index) => {
            return (
              <Col md={12} xs={12} className="mb-1">
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

                        {/* <cite title="Source Title">Source Title</cite> */}
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
// Home.defaultProps = {
//   posts: [
//     {
//       id: 1,
//       title: "🌎 Journey Into the Future",
//       description: "In a world where the impossible has become reality, the stars are no longer out of reach. Welcome to the future of humanity's survival and exploration. Witness the evolution of technology as it transforms barren planets into thriving havens, all made possible by the wonders of innovation and human determination."
//     },
//     {
//       id: 2,
//       title: "🌎 From Neglect to innovoation",
//       description: "Ones the credle of civilization, Earth now stands as a solemn reminder of the consequences of neglect and pursuit of advancement, we have not only healded our scars but extended our reach across the cosmos"
//     },
//     {
//       id: 3,
//       title: "🚀 Enter Space Travel: Where Dreams Take Fight",
//       description: "Embark on an extraordinary journey with our groundbreaking web aptly named 'Space Travel'. As a commander engineer, the late of humanity exodus rests in your capable hands. Prepare to face the ultimate challenge. evacuating humankind from their birthplace and guiding them towards a future among the stars."
//     },
//     {
//       id: 4,
//       title: "🧑‍🚀 Engineer, Expolrer, Leader",
//       description: "Space Travel empowers you to engineer, design, and even dismantly spacecraft, Craft vessets that defy the boundries of imagination, envisioning a future where life flourishes byond the stars. But remember, you role extends beyond construction -  you are a leader, an explorer & commander steering humanity's destiny"
//     },
//     {
//       id: 5,
//       title: "🪐 A Universe of Possibilities Awaits",
//       description: "Immerse yourlsef in the thrill of exploration as you chart interplanetary courses within our solar system. Seamlessly navigate your fleet of spacraft hurting through the cosmic void from one celestial body to another. The universe becomes your playground, and every planet a potential new home"
//     }

//   ]
// }
export default Home;
