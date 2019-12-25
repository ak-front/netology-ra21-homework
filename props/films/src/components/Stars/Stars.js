import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

const isNumber = n => {
  return typeof n === 'number' && !isNaN(n) && isFinite(n);
};

const isNumberInRange = (n, min, max) => {
  return n >= min && n <= max;
};

const MIN_COUNT = 1;
const MAX_COUNT = 5;

function Stars({ count }) {
  const parsedCount = parseInt(count);

  if (
    !isNumber(parsedCount)
    || !isNumberInRange(parsedCount, MIN_COUNT, MAX_COUNT)
  ) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(parsedCount)].map((x, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number
};

Stars.defaultProps = {
  count: 0
};

export default Stars;
