import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Виджет промо-проектов".
 */
function PromotionWidget({
  img,
  text,
  title,
  url
}) {
  return (
    <a href={url}>
      {img && (
        <img
          src={img}
          alt={title}
        />
      )}
      <h5>{title}</h5>
      <p>{text}</p>
    </a>
  );
}

PromotionWidget.propTypes = {
  /** Урл картинки */
  img: PropTypes.string,
  /** Текст */
  text: PropTypes.string,
  /** Заголовок */
  title: PropTypes.string.isRequired,
  /** Ссылка на промо-страницу */
  url: PropTypes.string.isRequired
};

export default PromotionWidget;
