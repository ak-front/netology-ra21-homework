import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ServiceFilterContext from './../../contexts/ServiceFilterContext';

function ServiceFilterProvider({ children }) {
  const [filter, setFilter] = useState('');

  return (
    <ServiceFilterContext.Provider value={{filter, setFilter}}>
      {children}
    </ServiceFilterContext.Provider>
  );
}

ServiceFilterProvider.propTypes = {
  children: PropTypes.node
};

export default ServiceFilterProvider;
