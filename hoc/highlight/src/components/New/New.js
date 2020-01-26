import React from 'react';
import PropTypes from 'prop-types';

function New({ children }) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
}

New.propTypes = {
  children: PropTypes.node
};

export default New;
