import React from 'react';
import PropTypes from 'prop-types';

function Response({
  from,
  message
}) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me" />
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
  );
}

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  message: PropTypes.shape({
    text: PropTypes.string,
    time: PropTypes.string.isRequired
  })
};

export default Response;
