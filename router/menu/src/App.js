import React from 'react';
import{
  BrowserRouter as Router,
  Route
} from'react-router-dom';

import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import HomePage from './pages/HomePage';
import TimeAttackPage from './pages/TimeAttackPage';

import Menu from './components/Menu';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route
            component={HomePage}
            exact
            path="/"
          />
          <Route
            component={DriftPage}
            path="/drift"
          />
          <Route
            component={TimeAttackPage}
            path="/timeattack"
          />
          <Route
            component={ForzaPage}
            path="/forza"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
