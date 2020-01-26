import React, { useEffect, useState } from 'react';
import nanoid from 'nanoid';

import MonthTable from './components/MonthTable';
import SortTable from './components/SortTable';
import YearTable from './components/YearTable';

import './App.css';

const { REACT_APP_DATA_URL } = process.env;

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(REACT_APP_DATA_URL)
      .then(response => response.json())
      .then(data => data.list)
      .then(list => {
        setList(list.map(item => ({
          id: nanoid(),
          ...item
        })));
      });
  }, []);

  return (
    <div id="app">
      <MonthTable list={list} />
      <YearTable list={list} />
      <SortTable list={list} />
    </div>
  );
}

export default App;
