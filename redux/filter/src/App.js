import React from 'react';

import ServiceFilterProvider from './components/ServiceFilterProvider';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';

import './App.css';

function App() {
  return (
    <ServiceFilterProvider>
      <div className="Services">
        <ServiceAdd />
        <ServiceFilter />
        <ServiceList />
      </div>
    </ServiceFilterProvider>
  );
}

export default App;
