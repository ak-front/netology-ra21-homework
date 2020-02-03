import React from 'react';
import { Container } from 'react-bootstrap';

import AuthProvider from './components/AuthProvider';
import Navbar from './components/Navbar';
import Content from './components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Container>
        <Navbar />
      </Container>
      <Container>
        <Content />
      </Container>
    </AuthProvider>
  );
}

export default App;
