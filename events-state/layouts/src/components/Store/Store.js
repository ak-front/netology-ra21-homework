import React, { useCallback, useState } from 'react';

import ShopProduct from './../../models/ShopProduct';

import CardsView from './../CardsView';
import IconSwitch from './../IconSwitch';
import ListView from './../ListView';

import productsJson from './../../data/products';

const VIEW_CARDS = 'VIEW_CARDS';
const VIEW_LIST = 'VIEW_LIST';
const VIEW_ICON_CARDS = 'view_module'
const VIEW_ICON_LIST = 'view_list';

const getViewIcon = currentView => {
  switch (currentView) {
    case VIEW_CARDS: {
      return VIEW_ICON_CARDS;
    }

    case VIEW_LIST: {
      return VIEW_ICON_LIST;
    }

    default: {
      return '';
    }
  }
};

function Store() {
  const [products] = useState(productsJson.map(product => new ShopProduct(product)));
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
          icon={getViewIcon(currentView)}
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

export default Store;
