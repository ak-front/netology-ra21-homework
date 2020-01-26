import React from 'react';

import New from './../components/New';
import Popular from './../components/Popular';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

function withHighlight(WrappedComponent) {
  function WithHighlight(props) {
    const { views } = props;

    if (views < 100) {
      return (
        <New>
          <WrappedComponent {...props}/>
        </New>
      );
    }

    if (views >= 1000) {
      return (
        <Popular>
          <WrappedComponent {...props}/>
        </Popular>
      );
    }

    return (
      <WrappedComponent {...props} />
    );
  }

  WithHighlight.displayName = `WithHighlight(${getDisplayName(WrappedComponent)})`;

  return WithHighlight;
}

export default withHighlight;

