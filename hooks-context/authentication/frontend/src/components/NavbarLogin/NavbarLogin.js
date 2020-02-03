import React, { useContext, useState } from 'react';
import {
  Button,
  Form,
  FormControl
} from 'react-bootstrap';

import AuthContext from './../../contexts/AuthContext';

function NavbarLogin() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const { isLogging, login } = useContext(AuthContext);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  };

  const handleSubmit = event => {
    const { username, password } = form;

    if (
      !isLogging
      && username !==''
      && password !== ''
    ) {
      login(username, password);
    }

    event.preventDefault();
  };

  return (
    <Form
      className="pt-2 pt-lg-0"
      inline
      onSubmit={handleSubmit}
    >
      <FormControl
        className="mr-sm-2 mb-2 mb-sm-0"
        disabled={isLogging}
        name="username"
        placeholder="Username"
        type="text"
        onChange={handleChange}
      />
      <FormControl
        className="mr-sm-2 mb-2 mb-sm-0"
        disabled={isLogging}
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <Button
        disabled={isLogging}
        type="submit"
        variant="outline-success"
      >
        Login
      </Button>
    </Form>
  );
}

export default NavbarLogin;
