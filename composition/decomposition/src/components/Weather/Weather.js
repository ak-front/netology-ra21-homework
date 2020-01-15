import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Погода"
 */
function Weather({
  forecast,
  icon,
  link,
  temp
}) {
  return (
    <div>
      <a href={link}>
        <img
          src={icon}
          alt=""
        />
        {temp}
        {forecast.map(f => (
          <Fragment key={f}>
            <span>{f}</span><br />
          </Fragment>
        ))}
      </a>
    </div>
  );
}

Weather.propTypes = {
  /** Прогноз погоды */
  forecast: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Иконка текущей погоды */
  icon: PropTypes.string.isRequired,
  /** Текущая температура */
  temp: PropTypes.string.isRequired,
  /** Ссылка на прогноз погоды */
  link: PropTypes.string.isRequired
};

export default Weather;
