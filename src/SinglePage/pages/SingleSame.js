import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Image, Jumbotron, Badge, ListGroup } from "react-bootstrap";
import Desolation from "../../images/desolation.jpeg";
import Armies from "../../images/fivearmies.jpg";
import Returning from "../../images/returnmovie.jpg";
import Ring from "../../images/ringfellow.jpg";
import Tower from "../../images/twotowersmovie.jpg";
import Journey from "../../images/unexpected.jpg";
import Lord from "../../images/lordSeries.jpg";
import Hobbit from "../../images/hobbitSeries.jpg";

const SingleSame = () => {
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
  const [image, setImage] = useState();
  const [libro, setLibro] = useState({});
  const _id = useParams();

  useEffect(() => {
    const getBooks = async () => {
      const res = await Axios.get(
        "https://the-one-api.herokuapp.com/v1/movie",
        {
          headers: {
            Authorization: "Bearer Zo5YLhQ40O1E6LLBnpdQ"
          }
        }
      );
      console.log(res.data.docs);
      const solo = res.data.docs.find(libro => libro._id === _id.id);
      setLibro(solo);
      console.log(solo);
      const imajin = findImage(_id.id);
      setImage(imajin);
      console.log(findImage(_id.id));
    };
    getBooks();
  }, []);

  return (
    <div className="container">
      <Image src={image} fluid />
      <Jumbotron>
        <h1 className="text-center">{libro.name}</h1>
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-center">
            {" "}
            <h1>
              Duracion en minutos:
              <Badge variant="secondary">{libro.runtimeInMinutes}</Badge>
            </h1>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            {" "}
            <h1>
              Presupuesto:
              <Badge variant="success">{libro.budgetInMillions}</Badge>
            </h1>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            <h1>
              Nominaciones al Oscar:
              <Badge variant="warning">{libro.academyAwardNominations}</Badge>
            </h1>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            {" "}
            <h1>
              Oscar Ganados:
              <Badge variant="dark">{libro.academyAwardWins}</Badge>
            </h1>
          </ListGroup.Item>
        </ListGroup>
      </Jumbotron>
    </div>
  );
};

export default SingleSame;
