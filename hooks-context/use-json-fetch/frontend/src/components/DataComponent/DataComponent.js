import React from 'react';

import useJsonFetch from './../../hooks/useJsonFetch';

function DataComponent() {
  const [data] = useJsonFetch('http://localhost:7070/data');

  return (
    <div>DataComponent: data -> {data && data.status}</div>
  );
}

export default DataComponent;
