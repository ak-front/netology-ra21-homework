import React from 'react';
import PropTypes from 'prop-types';

function ChatMessage({
  align,
  content
}) {
  return (
    <div className={`Chat-message${align === 'right' ? ' Chat-message--right' : ''}`}>
      {content}
    </div>
  );
}

ChatMessage.propTypes = {
  align: PropTypes.string,
  content: PropTypes.string.isRequired
};

export default ChatMessage;
