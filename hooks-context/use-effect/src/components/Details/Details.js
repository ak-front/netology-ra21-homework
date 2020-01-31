import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Nprogress from 'nprogress';
import { upperCaseFirst } from "upper-case-first";

const { REACT_APP_DETAILS_URL } = process.env;

function Details({ info }) {
  const { id } = info;
  const [infoData, setInfoData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    Nprogress.start();
    fetch(REACT_APP_DETAILS_URL.replace('{id}', id), {signal: signal})
      .then(response => response.json())
      .then(data => {
        Nprogress.done();
        setInfoData(data);
      })
      .catch(error => error);

    return function () {
      abortController.abort();
      Nprogress.done();
    }
  }, [id]);

  return (
    <div className="Details">
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
