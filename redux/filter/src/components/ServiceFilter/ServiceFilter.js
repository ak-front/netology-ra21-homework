import React, { useContext } from 'react';

import ServiceFilterContext from './../../contexts/ServiceFilterContext';

function ServiceFilter() {
  const { filter, setFilter } = useContext(ServiceFilterContext);

  const handleChange = event => {
    const { value } = event.target;

    setFilter(value);
  };

  return (
    <div className="ServiceFilter">
      <input
        type="text"
        placeholder="Фильтр"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default ServiceFilter;
