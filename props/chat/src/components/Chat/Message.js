import React from 'react';
import PropTypes from 'prop-types';

function Message({
  from,
  message
}) {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online" />
          {' '}
          {from.name}
        </span>
        <span className="message-data-time">10:12</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>
  );
}

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  message: PropTypes.shape({
    text: PropTypes.string,
    time: PropTypes.string.isRequired
  })
};

export default Message;
