import React from 'react';
import PropTypes from 'prop-types';

import Video from './../Video';

function VideoList({ list }) {
  return (
    <>
      {list.map(item => (
        <Video
          key={item.url}
          date={item.date}
          url={item.url}
        />
      ))}
    </>
  );
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    url: PropTypes.string
  }))
};

VideoList.defaultProps = {
  list: []
};

export default VideoList;
