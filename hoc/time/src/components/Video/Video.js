import React from 'react';
import PropTypes from 'prop-types';

import DateTime from './../DateTime';
import DateTimePretty from './../../hoc/DateTimePretty';

const WithDateTimePretty = DateTimePretty(DateTime);

function Video({
  date,
  url
}) {
  return (
    <div className="video">
      <iframe
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
        src={url}
      />
      <WithDateTimePretty date={date} />
    </div>
  );
}

Video.propTypes = {
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Video;
