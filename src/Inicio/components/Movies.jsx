import React from "react";
import { Media } from "react-bootstrap";
import Desolation from "../../images/desolation.jpeg";
import Armies from "../../images/fivearmies.jpg";
import Returning from "../../images/returnmovie.jpg";
import Ring from "../../images/ringfellow.jpg";
import Tower from "../../images/twotowersmovie.jpg";
import Journey from "../../images/unexpected.jpg";
import Lord from "../../images/lordSeries.jpg";
import Hobbit from "../../images/hobbitSeries.jpg";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const Movies = ({ movies }) => {
  const imageMovies = [
    { id: "5cd95395de30eff6ebccde56", image: Lord },
    { id: "5cd95395de30eff6ebccde57", image: Hobbit },
    {
      id: "5cd95395de30eff6ebccde58",
      image: Journey
    },
    {
      id: "5cd95395de30eff6ebccde59",
      image: Desolation
    },
    {
      id: "5cd95395de30eff6ebccde5a",
      image: Armies
    },
    { id: "5cd95395de30eff6ebccde5b", image: Tower },
    {
      id: "5cd95395de30eff6ebccde5c",
      image: Ring
    },
    {
      id: "5cd95395de30eff6ebccde5d",
      image: Returning
    }
  ];
  const findImage = id => {
    const im = imageMovies.find(image => image.id === id);
    return im.image;
  };

  return (
    <ul className="list-unstyled">
      <Row>
        {movies.map(movie => (
          <Media as="li" key={movie._id} className="mr-3">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={findImage(movie._id)}
              alt={movie.name}
            />

            <Media.Body>
              <Link to={`/${movie._id}`}>
                <h5>{movie.name}</h5>
              </Link>
            </Media.Body>
          </Media>
        ))}
      </Row>
    </ul>
  );
};

export default Movies;
