import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Основной логотип сайта"
 */
function Logo({
  img,
  url
}) {
  return (
    <div>
      <a href={url}>
        <img
          src={img.src}
          alt={img.alt}
        />
      </a>
    </div>
  );
}

Logo.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  url: PropTypes.string
};

Logo.defaultProps = {
  url: '/'
};

export default Logo;
