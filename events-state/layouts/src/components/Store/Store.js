import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import CardsView from './../CardsView';
import IconSwitch from './../IconSwitch';
import ListView from './../ListView';

const VIEW_CARDS = 'VIEW_CARDS';
const VIEW_LIST = 'VIEW_LIST';
const ICONS_TYPES_MAP = {
  [VIEW_CARDS]: 'view_module',
  [VIEW_LIST]: 'view_list'
};

function Store({ products }) {
  const [currentView, toggleCurrentView] = useState(VIEW_CARDS);
  const handleViewIconSwitch = useCallback(
    () => {
      toggleCurrentView(view => {
        if (view === VIEW_CARDS) {
          return VIEW_LIST;
        }

        return VIEW_CARDS;
      });
    },
    [toggleCurrentView]
  );

  return (
    <div className="catalog">
      <div className="catalog__header">
        <IconSwitch
          icon={ICONS_TYPES_MAP[currentView]}
          onSwitch={handleViewIconSwitch}
        />
      </div>
      <div className="catalog__content">
        {currentView === VIEW_CARDS
          ? <CardsView cards={products} />
          : <ListView items={products} />
        }
      </div>
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.array
};

Store.defaultProps = {
  products: []
};

export default Store;
