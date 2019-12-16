import React from 'react';
import PropTypes from 'prop-types';

import ShopItem from '../../models/ShopItem';

function ShopItemFunc({ item }) {
  const {
    currency,
    brand,
    description,
    descriptionFull,
    price,
    title
  } = item;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">{`${currency}${price.toFixed(2)}`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ShopItem)
};

export default ShopItemFunc;
