import React from 'react';
import PropTypes from 'prop-types';

import ToolbarButton from './ToolbarButton';

function Toolbar({
  filters,
  selected,
  onSelectFilter
}) {
  return (
    <div className="toolbar">
      {filters.map(filter => (
        <ToolbarButton
          key={filter}
          isActive={filter === selected}
          value={filter}
          onClick={onSelectFilter}
        />
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
};

Toolbar.defaultProps = {
  filters: [],
  selected: '',
  onSelectFilter: () => null
};

export default Toolbar;
