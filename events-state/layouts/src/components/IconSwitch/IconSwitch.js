import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch({
  icon,
  onSwitch
}) {
  return (
    <button
      className="catalog__view-button"
      type="button"
      onClick={onSwitch}
    >
      <span className="material-icons">{icon}</span>
    </button>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
};

IconSwitch.defaultProps = {
  icon: '',
  onSwitch: () => null
};

export default IconSwitch;
