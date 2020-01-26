import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

function DateTimePretty(WrappedComponent) {
  function WithDateTimePretty(props) {
    const { date } = props;

    return (
      <WrappedComponent
        {...props}
        date={moment(date).fromNow()}
      />
    );
  }

  WithDateTimePretty.displayName = `WithDateTimePretty(${getDisplayName(WrappedComponent)})`;

  return WithDateTimePretty;
}

export default DateTimePretty;

