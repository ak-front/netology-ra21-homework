import React from 'react';
import PropTypes from 'prop-types';

import WatchesItem from './WatchesItem';

function WatchesList({
  items,
  onWatchRemove
}) {
  return (items.length > 0 && (
    <div className="Watches-list">
      {items.map(item => (
        <WatchesItem
          key={item.id}
          id={item.id}
          name={item.name}
          timeZone={item.timeZone}
          onRemove={onWatchRemove}
        />
      ))}
    </div>
  ));
}

WatchesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    timeZone: PropTypes.number.isRequired
  })),
  onWatchRemove: PropTypes.func
};

WatchesList.defaultProps = {
  items: [],
  onWatchRemove: () => null
};

export default WatchesList;
