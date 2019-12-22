import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const ACTIVE_STYLE = {
  color: '#5380F7'
};

function DropdownItem({
  isActive,
  value,
  onSelect
}) {
  const handleClick = useCallback(
    event => {
      onSelect(value);
      event.preventDefault();
    },
    [value, onSelect]
  );

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
