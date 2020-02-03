import React from 'react';

import FetchComponent from './components/FetchComponent';

import './App.css';

function App() {
  return (
    <>
      <FetchComponent url="http://localhost:7070/data" />
      <FetchComponent url="http://localhost:7070/error" />
      <FetchComponent url="http://localhost:7070/loading" />
    </>
  );
}

export default App;
