import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopItemClass extends Component {
  render() {
    const {
      item: {
        currency,
        brand,
        description,
        descriptionFull,
        price,
        title
      }
    } = this.props;

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
}

// Больше нравится такой вариант, чем static propTypes
ShopItemClass.propTypes = {
  item: PropTypes.shape({
    currency: PropTypes.string,
    brand: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string
  })
};

ShopItemClass.defaultProps = {
  item: {
    currency: '',
    brand: '',
    description: '',
    descriptionFull: '',
    price: 0,
    title: ''
  }
};

export default ShopItemClass;
