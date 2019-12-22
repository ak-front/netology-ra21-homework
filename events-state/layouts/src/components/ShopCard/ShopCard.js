import React from 'react';
import PropTypes from 'prop-types';

function ShopCard({
  name,
  price,
  color,
  img
}) {
  return (
    <div className="catalog-card">
      <h5 className="catalog-card__title">{name}</h5>
      <div className="catalog-card__color">{color}</div>
      <div className="catalog-card__image">
        <img
          src={img}
          alt={name}
        />
      </div>
      <div className="catalog-card__actions">
        <div className="catalog-card__price">${price}</div>
        <button
          className="catalog-card__add-button"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string
};

export default ShopCard;
