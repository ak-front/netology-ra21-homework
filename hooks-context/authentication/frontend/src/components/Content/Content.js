import React, { useContext } from 'react';
import {
  Col,
  Jumbotron,
  Row
} from 'react-bootstrap';

import AuthContext from './../../contexts/AuthContext';
import News from './../News';

function Content() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Row className="justify-content-md-center">
      <Col md="10">
        {!isLoggedIn ? (
          <Jumbotron>
            <h1>Neto Social</h1>
            <p>Facebook and VK killer</p>
          </Jumbotron>
        ) : (
          <News />
        )}
      </Col>
    </Row>
  );
}

export default Content;
