import React from 'react';
import PropTypes from 'prop-types';

function Typing({
  from,
  message
}) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online" />
          {' '}
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>
  );
}

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  message: PropTypes.shape({
    text: PropTypes.string,
    time: PropTypes.string.isRequired
  })
};

export default Typing;
