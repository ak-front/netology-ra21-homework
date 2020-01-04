import React from 'react';
import PropTypes from 'prop-types';

function Response({
  from,
  text,
  time
}) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me" />
      </div>
      <div className="message other-message float-right">
        {text}
      </div>
    </li>
  );
}

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  text: PropTypes.string,
  time: PropTypes.string.isRequired
};

export default Response;
