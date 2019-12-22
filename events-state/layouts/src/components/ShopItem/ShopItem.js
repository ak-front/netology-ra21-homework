import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({
  name,
  price,
  color,
  img
}) {
  return (
    <div className="catalog-item">
      <div className="catalog-item__cell">
        <div className="catalog-item__image">
          <img
            src={img}
            alt={name}
          />
        </div>
      </div>
      <div className="catalog-item__cell">
        <h5 className="catalog-item__title">{name}</h5>
      </div>
      <div className="catalog-item__cell">
        <div className="catalog-item__color">{color}</div>
      </div>
      <div className="catalog-item__cell">
        <div className="catalog-item__price">${price}</div>
      </div>
      <div className="catalog-item__cell">
        <button
          className="catalog-item__add-button"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string
};

export default ShopItem;
