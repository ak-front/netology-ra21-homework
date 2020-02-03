import React from 'react';
import PropTypes from 'prop-types';

import useJsonFetch from './../../hooks/useJsonFetch';

function FetchComponent({ url }) {
  const [data, loading, error] = useJsonFetch(url);

  console.log(url, data, loading, error);

  return (
    <div></div>
  );
}

FetchComponent.propTypes = {
  url: PropTypes.string
};

export default FetchComponent;
