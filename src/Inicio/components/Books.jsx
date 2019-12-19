import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fellow from "../../images/fellow.jpg";
import King from "../../images/returnKing.jpg";
import Tower from "../../images/twoTowers.jpg";
const Books = ({ books }) => {
  const tok = [
    { id: "5cf5805fb53e011a64671582", image: Fellow },
    { id: "5cf58077b53e011a64671583", image: Tower },
    { id: "5cf58080b53e011a64671584", image: King }
  ];
  console.log(books);
  return (
    <Container>
      <Col>
        <Row>
          <h1>Books</h1>
        </Row>
        <Row>
          <ul>
            {books.map(book => {
              return (
                <li key={book._id}>
                  <Link to={`/${book._id}`}>
                    <Image
                      src={tok.find(image => image.id === book._id).image}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Row>
      </Col>
    </Container>
  );
};

export default Books;
