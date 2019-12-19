import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import SpechTranslator from "../components/SpechTranslator";
import { Container, Col, Row } from "react-bootstrap";
import Displayer from "../components/Displayer";
import Movies from "../components/Movies";
const Inicio = () => {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [quote, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBooks = async () => {
    const res = await Axios.get("https://the-one-api.herokuapp.com/v1/book", {
      headers: {
        Authorization: "Bearer Zo5YLhQ40O1E6LLBnpdQ"
      }
    });

    setBooks(res.data.docs);
  };
  const getMovies = async () => {
    const res = await Axios.get("https://the-one-api.herokuapp.com/v1/movie", {
      headers: {
        Authorization: "Bearer Zo5YLhQ40O1E6LLBnpdQ"
      }
    });
    console.log(res.data.docs);

    setMovies(res.data.docs);
  };

  const getQuotes = async () => {
    const res = await Axios.get("https://the-one-api.herokuapp.com/v1/quote", {
      headers: {
        Authorization: "Bearer Zo5YLhQ40O1E6LLBnpdQ"
      }
    });
    setQuotes(res.data.docs[Math.ceil(Math.random() * 2000)]);
  };
  useEffect(() => {
    setLoading(true);
    getBooks();
    getQuotes();
    getMovies();
    setLoading(false);
    // getChars();
  }, []);
  return (
    <>
      <Container>
        <h1 className="text-center">Quotes</h1>
        <ul>
          <h1 className="text-center">{quote.dialog}</h1>
        </ul>
        <SpechTranslator quote={quote.dialog} />
        <h1 className="text-center">Peliculas</h1>
        {!loading ? <Movies movies={movies} /> : <h1>Loading...</h1>}
        <Col>
          <Row className="d-flex justify-content-center w-100">
            <h1>Libros</h1>
          </Row>
          <Row className="d-flex justify-content-center">
            {!loading ? <Displayer books={books} /> : <h1>Loading...</h1>}
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Inicio;
