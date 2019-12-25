import React from 'react';
import PropTypes from 'prop-types';

import { MESSAGE_TYPES } from './constants';

import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({ list }) {
  return (
    <ul>
      {list.map(item => (
        <React.Fragment key={item.id}>
          {MESSAGE_TYPES.MESSAGE === item.type && (
            <Message
              from={item.from}
              message={{
                time: item.time,
                text: item.text
              }}
            />
          )}
          {MESSAGE_TYPES.RESPONSE === item.type && (
            <Response
              from={item.from}
              message={{
                time: item.time,
                text: item.text
              }}
            />
          )}
          {MESSAGE_TYPES.TYPING === item.type && (
            <Typing
              from={item.from}
              message={{
                time: item.time,
                text: '...'
              }}
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.object.isRequired,
    type: PropTypes.oneOf([
      MESSAGE_TYPES.MESSAGE,
      MESSAGE_TYPES.RESPONSE,
      MESSAGE_TYPES.TYPING
    ]).isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string
  }))
};

MessageHistory.defaultProps = {
  list: []
};

export default MessageHistory;
