import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WatchModel from './../../models/Watch';
import WatchesForm from './WatchesForm';
import WatchesList from './WatchesList';

import './Watches.css';

function Watches(props) {
  const [watches, setWatches] = useState([]);
  const handleFormSubmit = item => {
    setWatches(prevWatches => ([
      ...prevWatches,
      new WatchModel(item)
    ]));
  };
  const handleWatchRemove = id => {
    setWatches(prevWatches => (
      prevWatches.filter(watch => watch.id !== id)
    ));
  };

  return (
    <div className="Watches">
      <WatchesForm onSubmit={handleFormSubmit} />
      <WatchesList
        items={watches}
        onWatchRemove={handleWatchRemove}
      />
    </div>
  );
}

Watches.propTypes = {

};

export default Watches;
