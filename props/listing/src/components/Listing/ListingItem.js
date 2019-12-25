import React from 'react';
import PropTypes from 'prop-types';

import {
  CURRENCIES_CODES,
  CURRENCIES_SYMBOLS_MAP
} from './../../constants/currencies';

const getPrettyPrice = (currencyCode, price) => {
  switch (currencyCode) {
    case CURRENCIES_CODES.USD:
    case CURRENCIES_CODES.EUR: {
      return `${CURRENCIES_SYMBOLS_MAP[currencyCode]}${price}`;
    }

    default: {
      return `${price} ${currencyCode}`;
    }
  }
};

const getQuantityLevelClassName = quantity => {
  if (quantity > 20) {
    return 'level-high';
  }

  if (quantity <= 10) {
    return 'level-low';
  }

  if (quantity <= 20) {
    return 'level-medium';
  }

  return '';
};

const truncateString = (str, max = 50, endStr = '…') => {
  return str.length > max ? str.substring(0, max) + endStr : str;
};

function ListingItem({ item }) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{truncateString(item.title)}</p>
        <p className="item-price">{getPrettyPrice(item.currency_code, item.price)}</p>
        <p className={`item-quantity ${getQuantityLevelClassName(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}

ListingItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    MainImage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    currency_code: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default ListingItem;
