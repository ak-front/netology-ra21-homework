import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Баннер"
*/
function Banner({ link, img }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt="" />
      </a>
    </div>
  );
}

Banner.propTypes = {
  /** Картинка баннера */
  img: PropTypes.string.isRequired,
  /** Ссылка */
  link: PropTypes.string.isRequired
};

export default Banner;
