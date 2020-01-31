import React from 'react';

import New from './../components/New';
import Popular from './../components/Popular';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

function withHighlight(WrappedComponent) {
  function WithHighlight(props) {
    const { views } = props;
    const node = <WrappedComponent {...props}/>;

    if (views < 100) {
      return (
        <New>{node}</New>
      );
    }

    if (views >= 1000) {
      return (
        <Popular>{node}</Popular>
      );
    }

    return (
      <>{node}</>
    );
  }

  WithHighlight.displayName = `WithHighlight(${getDisplayName(WrappedComponent)})`;

  return WithHighlight;
}

export default withHighlight;

