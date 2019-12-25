import React from 'react';

import ListingItem from './ListingItem';

import DATA from './../../data/etsy.json';

const ITEM_STATES = {
  ACTIVE: 'active',
  REMOVED: 'removed'
};

function Listing() {
  return (
    <div className="wrapper">
      <div className="item-list">
        {DATA.map(item => (
          <React.Fragment key={item.listing_id}>
            {ITEM_STATES.ACTIVE === item.state && (
              <ListingItem item={item} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Listing;
