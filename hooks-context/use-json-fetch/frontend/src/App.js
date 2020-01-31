import React from 'react';

import './App.css';

import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';

function App() {
  return (
    <>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </>
  );
}

export default App;
