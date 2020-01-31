import React, { useState } from 'react';
import {
  Col,
  Container,
  Jumbotron,
  Navbar,
  Row
} from 'react-bootstrap';
import store from 'store2';

import NavbarAuth from './components/NavbarAuth';
import NavbarProfile from './components/NavbarProfile';
import News from './components/News';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const STORE_KEY_TOKEN = 'token';
const TOKEN_DEFAULT_STATE = '';

function App() {
  const [token, setToken] = useState(store.get(STORE_KEY_TOKEN) || TOKEN_DEFAULT_STATE);

  const isLoggedIn = () => token !== TOKEN_DEFAULT_STATE;

  const handleLogin = token => {
    setToken(token);
    store.set(STORE_KEY_TOKEN, token);
  };

  const handleLogout = () => {
    setToken(TOKEN_DEFAULT_STATE);
    store.remove(STORE_KEY_TOKEN);
  };

  return (
    <>
      <Container>
        <Navbar
          className="mt-3 mb-3"
          bg="light"
          expand="lg"
        >
          <Navbar.Brand href="#home">
            Neto Social
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            {!isLoggedIn() ? (
              <NavbarAuth onLogin={handleLogin} />
            ) : (
              <NavbarProfile
                token={token}
                onLogout={handleLogout}
              />
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="10">
            {!isLoggedIn() ? (
              <Jumbotron>
                <h1>Neto Social</h1>
                <p>Facebook and VK killer</p>
              </Jumbotron>
            ) : (
              <News token={token} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
