import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function ToolbarButton({
  isActive,
  value,
  onClick
}) {
  const handleClick = useCallback(
    () => {
      onClick(value);
    },
    [value, onClick],
  );

  return (
    <button
      className={cn('toolbar__button', isActive && 'toolbar__button--active')}
      type="button"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

ToolbarButton.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func
}

ToolbarButton.defaultProps = {
  isActive: false,
  value: '',
  onClick: () => null
};

export default ToolbarButton;
