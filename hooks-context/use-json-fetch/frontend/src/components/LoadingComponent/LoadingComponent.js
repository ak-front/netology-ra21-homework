import React from 'react';

import useJsonFetch from './../../hooks/useJsonFetch';

function ErrorComponent() {
  const [, loading] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div>LoadingComponent: loading -> {loading ? 'true' : 'false'}</div>
  );
}

export default ErrorComponent;
