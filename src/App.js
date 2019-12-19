import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Inicio from "./Inicio/pages/Inicio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleSame from "./SinglePage/pages/SingleSame";
import { Navbar, Nav, Button } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Señor De Los Anillos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="/">Inicio</NavLink>
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/:id" exact>
          <SingleSame />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
