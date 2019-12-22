import React from 'react';
import PropTypes from 'prop-types';

import ShopCard from './../ShopCard';

function CardsView({ cards }) {
  return (
    <div className="catalog-cards">
      {cards.map(card => (
        <ShopCard
          key={card.id}
          name={card.name}
          price={card.price}
          color={card.color}
          img={card.img}
        />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array
};

CardsView.defaultProps = {
  cards: []
};

export default CardsView;
