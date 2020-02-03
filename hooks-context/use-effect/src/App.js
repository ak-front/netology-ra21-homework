import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import Details from './components/Details';
import List from './components/List';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

const { REACT_APP_USERS_URL } = process.env;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const handleUserClick = id => {
    if (id !== selectedUserId) {
      setSelectedUserId(id);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(REACT_APP_USERS_URL)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setUsers(data)
      });
  }, []);

  return (
    <div className="Users">
      <List list={users}>
        {list => (isLoading ? (
          <li className="List-loader">
            <Loader
              type="Oval"
              color="#777"
              height={30}
              width={30}
            />
          </li>
        ) : (
          list.map(item => (
            <li
              key={item.id}
              className={item.id === selectedUserId ? 'List-item--active' : null}
              onClick={() => handleUserClick(item.id)}
            >
              {item.name}
            </li>
          ))
        ))}
      </List>
      {!!selectedUserId && (
        <Details info={users.find(user => user.id === selectedUserId)} />
      )}
    </div>
  );
}

export default App;
