import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Виджет"
 */
function Widget({
  children,
  link,
  title
}) {
  return (
    <div className="index-page__widget">
      <h5>
        <a href={link}>{title}</a>
      </h5>
      <div>
        {children}
      </div>
    </div>
  );
}

Widget.propTypes = {
  children: PropTypes.node,
  /** Ссылка на раздел */
  link: PropTypes.string,
  /** Заголовок виджета */
  title: PropTypes.string
};

export default Widget;
