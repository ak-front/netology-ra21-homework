import React from 'react';
import PropTypes from 'prop-types';

function List({
  children,
  list
}) {
  return (
    <ul className="List">
      {children(list)}
    </ul>
  );
}

List.propTypes = {
  children: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};

export default List;
