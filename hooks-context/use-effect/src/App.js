import React, { useEffect, useState } from 'react';
import Nprogress from 'nprogress';

import Details from './components/Details';
import List from './components/List';

import 'nprogress/nprogress.css';
import './App.css';

const { REACT_APP_USERS_URL } = process.env;

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const handleUserClick = id => {
    if (id !== selectedUserId) {
      setSelectedUserId(id);
    }
  };

  useEffect(() => {
    Nprogress.start();
    fetch(REACT_APP_USERS_URL)
      .then(response => response.json())
      .then(data => {
        Nprogress.done();
        setUsers(data)
      });
  }, []);

  return (
    <div className="Users">
      <List list={users}>
        {list => (
          list.map(item => (
            <li
              key={item.id}
              className={item.id === selectedUserId ? 'List-item--active' : null}
              onClick={() => handleUserClick(item.id)}
            >
              {item.name}
            </li>
          ))
        )}
      </List>
      {!!selectedUserId && (
        <Details info={users.find(user => user.id === selectedUserId)} />
      )}
    </div>
  );
}

export default App;
