import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  ERROR_PAGE,
  INDEX_PAGE,
  SERVICE_PAGE,
} from './constants/routes';

import ErrorPage from './pages/error';
import IndexPage from './pages/index';
import ServicePage from './pages/service';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <Switch>
          <Route
            component={IndexPage}
            exact
            path={INDEX_PAGE}
          />
          <Route
            component={ServicePage}
            exact
            path={SERVICE_PAGE}
          />
          <Route
            component={ErrorPage}
            path={ERROR_PAGE}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
