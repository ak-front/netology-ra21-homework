import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Простой список новостей".
 */
function NewsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <a href={item.url}>
            {item.icon && (
              <img
                src={item.icon}
                alt=""
              />
            )}
            {' '}
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

NewsList.propTypes = {
  /** Список новостей. У каждой новости есть id, иконка, текст и ссылка */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default NewsList;
