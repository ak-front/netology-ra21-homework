import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { PostsProvider } from './contexts/PostsContext';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/PostPage';

import './App.css';

function App() {
  return (
    <PostsProvider>
      <Router>
        <Switch>
          <Route
            component={NewPostPage}
            exact
            path="/posts/new"
          />
          <Route
            component={PostPage}
            exact
            path="/posts/:id"
          />
          <Route
            component={HomePage}
            exact
            path="/"
          />
          <Route
            component={ErrorPage}
            path="*"
          />
        </Switch>
      </Router>
    </PostsProvider>
  );
}

export default App;
