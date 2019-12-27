import React from 'react';
import PropTypes from 'prop-types';

function PhotoManagerItem({
  id,
  src,
  onRemove
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <div className="PhotoManager-listItem">
      <div className="PhotoManager-item">
        <div className="PhotoManager-itemInner">
          <img
            src={src}
            alt=""
          />
        </div>
        <button
          className="PhotoManager-itemRemove"
          type="button"
          onClick={handleRemoveClick}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

PhotoManagerItem.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onRemove: PropTypes.func
};

PhotoManagerItem.defaultProps = {
  onRemove: () => null
};

export default PhotoManagerItem
