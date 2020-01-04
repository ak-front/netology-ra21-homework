import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Акций"
 */
function Stocks({ items }) {
  return (
    <div>
      {items.map(item => (
        <span key={item.id}>
          <a href={item.url}>{item.label}</a>
          {item.value}
          <span>{item.delta}</span>
        </span>
      ))}
      <a href="#">...</a>
    </div>
  );
}

Stocks.propTypes = {
  /** Объект списка акций */
  items: PropTypes.arrayOf(PropTypes.shape({
    delta: PropTypes.string,
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default Stocks;
