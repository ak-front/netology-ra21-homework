import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormControl
} from 'react-bootstrap';

const { REACT_APP_AUTH_URL } = process.env;

function NavbarAuth({ onLogin }) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const authorize = async () => {
    const { username, password } = form;

    setIsSubmitting(true);

    try {
      const response = await fetch(REACT_APP_AUTH_URL, {
        method: 'post',
        body: JSON.stringify({
          login: username,
          password: password
        })
      });

      if (!response.ok && response.status !== 400) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      if (!response.ok && response.status === 400) {
        throw new Error(data.message);
      }

      setIsSubmitting(false);

      if (!response.ok && response.status === 400) {
        throw new Error(data.message);
      }

      onLogin(data.token);
    } catch (error) {
      setIsSubmitting(false);
      alert(error.message);
    }
  };

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
      !isSubmitting
      && username !==''
      && password !== ''
    ) {
      authorize();
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
        disabled={isSubmitting}
        name="username"
        placeholder="Username"
        type="text"
        onChange={handleChange}
      />
      <FormControl
        className="mr-sm-2 mb-2 mb-sm-0"
        disabled={isSubmitting}
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        variant="outline-success"
      >
        Login
      </Button>
    </Form>
  );
}

NavbarAuth.propTypes = {
  onLogin: PropTypes.func
};

NavbarAuth.defaultProps = {
  onLogin: () => null
};

export default NavbarAuth;

