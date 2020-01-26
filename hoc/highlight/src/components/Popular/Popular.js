import React from 'react';
import PropTypes from 'prop-types';

function Popular({ children }) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
}

Popular.propTypes = {
  children: PropTypes.node
};

export default Popular;
