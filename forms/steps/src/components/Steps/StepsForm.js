import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);

const INITIAL_FORM_STATE = {
  date: null,
  distance: ''
};

function StepsForm({ onSubmit }) {
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const handleDateSelect = (date) => {
    setForm(prevForm => ({
      ...prevForm,
      date
    }));
  };

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    if (
      form.date !== null
      && form.distance !== ''
    ) {
      onSubmit({
        ...form,
        distance: parseInt(form.distance)
      });
      setForm(INITIAL_FORM_STATE);
    }

    event.preventDefault();
  };

  return (
    <form
      className="Steps-form"
      onSubmit={handleSubmit}
    >
      <div className="Steps-field">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          locale="ru"
          selected={form.date}
          onSelect={handleDateSelect}
          dayClassName={date => (
            moment(date).isAfter(new Date()) ? 'react-datepicker__day--disabled' : undefined
          )}
        />
      </div>
      <div className="Steps-field">
        <label htmlFor="distance">Пройдено км</label>
        <input
          id="distance"
          name="distance"
          type="number"
          value={form.distance}
          onChange={handleInputChange}
        />
      </div>
      <div className="Steps-submit">
        <button className="Steps-button">Ок</button>
      </div>
    </form>
  );
}

StepsForm.propTypes = {
  onSubmit: PropTypes.func
};

StepsForm.defaultProps = {
  onSubmit: () => null
};

export default StepsForm;
