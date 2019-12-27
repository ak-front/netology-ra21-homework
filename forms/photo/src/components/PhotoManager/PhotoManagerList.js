import React from 'react';
import PropTypes from 'prop-types';

import PhotoManagerItem from './PhotoManagerItem';

function PhotoManagerList({
  items,
  onItemRemove
}) {
  return (items.length > 0 && (
    <div className="PhotoManager-list">
      {items.map(item => (
        <PhotoManagerItem
          key={item.id}
          id={item.id}
          src={item.src}
          onRemove={onItemRemove}
        />
      ))}
    </div>
  ));
}

PhotoManagerList.propTypes = {
  items: PropTypes.array,
  onItemRemove: PropTypes.func
};

PhotoManagerList.defaultProps = {
  items: [],
  onItemRemove: () => null
};

export default PhotoManagerList;
