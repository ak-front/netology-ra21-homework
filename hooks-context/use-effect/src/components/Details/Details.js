import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { upperCaseFirst } from 'upper-case-first';

const { REACT_APP_DETAILS_URL } = process.env;

function Details({ info }) {
  const { id } = info;
  const [infoData, setInfoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setIsLoading(true);
    fetch(REACT_APP_DETAILS_URL.replace('{id}', id), {signal: signal})
      .then(response => response.json())
      .then(data => {
        setInfoData(data);
        setIsLoading(false);
      })
      .catch(error => error);

    return function () {
      abortController.abort();
      setIsLoading(false);
    }
  }, [id]);

  return (
    <div className="Details">
      {isLoading ? (
        <div className="Details-loader">
          <Loader
            type="Oval"
            color="#777"
            height={30}
            width={30}
          />
        </div>
      ) : (
        <>
          {infoData.avatar && (
            <img
              src={infoData.avatar}
              alt={infoData.name}
            />
          )}
          {infoData.name && (
            <h5>{infoData.name}</h5>
          )}
          {infoData.details && Object.keys(infoData.details).map(key => (
            <p key={key}>{upperCaseFirst(key)}: {infoData.details[key]}</p>
          ))}
        </>
      )}
    </div>
  );
}

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default Details;
