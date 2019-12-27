import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE_STYLE = {
  color: '#5380F7'
};

function DropdownItem({
  isActive,
  value,
  onSelect
}) {
  const handleClick = event => {
    onSelect(value);
    event.preventDefault();
  };

  return (
    <li style={Object.assign({}, isActive && ACTIVE_STYLE)}>
      <a
        href="#"
        onClick={handleClick}
      >
        {value}
      </a>
    </li>
  );
}

DropdownItem.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

DropdownItem.defaultProps = {
  onSelect: () => null
};

export default DropdownItem;
