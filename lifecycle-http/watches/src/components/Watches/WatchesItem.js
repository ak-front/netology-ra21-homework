import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const zeroPad = n => {
  if (n < 10) {
    return n = `0${n}`;
  }

  return n.toString();
};

const getDateByGtmHourOffset = gtmHourOffset => {
  const now = new Date();
  const timeOffset = now.getTimezoneOffset();

  return new Date(now.getTime() + timeOffset * 60 * 1000 + gtmHourOffset * 60 * 60 * 1000);
};

const formatDate = (date) => {
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  return `${zeroPad(hh)}:${zeroPad(mm)}:${zeroPad(ss)}`;
};

function WatchesItem({
  id,
  name,
  timeZone,
  onRemove
}) {
  const [time, setTime] = useState(formatDate(getDateByGtmHourOffset(timeZone)));
  const handleRemoveClick = () => {
    onRemove(id);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatDate(getDateByGtmHourOffset(timeZone)));
    }, 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  });

  return (
    <div className="Watches-item">
      <div>
        <h5>
          {name}
          {' '}
          <small>(GTM{timeZone > 0 ? `+${timeZone}` : timeZone})</small>
        </h5>
        <button
          className="Watches-itemRemove"
          type="button"
          onClick={handleRemoveClick}
        >
          &times;
        </button>
      </div>
      <p>{time}</p>
    </div>
  );
}

WatchesItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeZone: PropTypes.number.isRequired,
  onRemove: PropTypes.func
};

WatchesItem.defaultProps = {
  onRemove: () => null
};

export default WatchesItem;
