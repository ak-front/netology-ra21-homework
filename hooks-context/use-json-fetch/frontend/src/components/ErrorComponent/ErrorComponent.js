import React from 'react';

import useJsonFetch from './../../hooks/useJsonFetch';

function ErrorComponent() {
  const [,, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div>ErrorComponent: error -> {error && error.message}</div>
  );
}

export default ErrorComponent;
