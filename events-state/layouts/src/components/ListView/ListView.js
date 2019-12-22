import React from 'react';
import PropTypes from 'prop-types';

import ShopItem from './../ShopItem';

function ListView({ items }) {
  return (
    <div className="catalog-list">
      {items.map(item => (
        <ShopItem
          key={item.id}
          name={item.name}
          price={item.price}
          color={item.color}
          img={item.img}
        />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array
};

ListView.defaultProps = {
  items: []
};

export default ListView;
