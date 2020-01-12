import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  timeZone: ''
};

function WatchesForm({ onSubmit }) {
  const [form, setForm] = useState(INITIAL_STATE);
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  };
  const handleSubmit = event => {
    const { name, timeZone } = form;

    if (
      name !== ''
      && timeZone !== ''
    ) {
      onSubmit({
        name,
        timeZone: parseInt(timeZone)
      });
      setForm(INITIAL_STATE);
    }

    event.preventDefault();
  };

  return (
    <form
      className="Watches-form"
      onSubmit={handleSubmit}
    >
      <div className="Watches-field">
        <label htmlFor="name">Название</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div className="Watches-field">
        <label htmlFor="timeZone">Временная зона</label>
        <input
          id="timeZone"
          max="23"
          min="-23"
          name="timeZone"
          type="number"
          onChange={handleChange}
          value={form.timeZone}
        />
      </div>
      <div className="Watches-submit">
        <button className="Watches-button">Добавить</button>
      </div>
    </form>
  );
}

WatchesForm.propTypes = {
  onSubmit: PropTypes.func
};

WatchesForm.defaultProps = {
  onSubmit: () => null
};

export default WatchesForm;
