import React from 'react';
import PropTypes from 'prop-types';

function Video({
  url,
  views
}) {
  return (
    <div className="item item-video">
      <iframe
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
        src={url}
      />
      <p className="views">Просмотров: {views}</p>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number,
};

Video.defaultProps = {
  views: 0
};

export default Video;
