import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fellow from "../../images/fellow.jpg";
import King from "../../images/returnKing.jpg";
import Tower from "../../images/twoTowers.jpg";
const Displayer = ({ books }) => {
  const tok = [
    { id: "5cf5805fb53e011a64671582", image: Fellow },
    { id: "5cf58077b53e011a64671583", image: Tower },
    { id: "5cf58080b53e011a64671584", image: King }
  ];
  return (
    <Carousel>
      {books.map(book => {
        return (
          <Carousel.Item key={book.id}>
            <Image
              src={tok.find(image => image.id === book._id).image}
              alt="First slide"
              className="d-block"
            />

            <Carousel.Caption>
              <h3>{book.name}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Displayer;
