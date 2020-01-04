import React from 'react';
import PropTypes from 'prop-types';

import Widget from './../Widget';

/**
 * Компонент виджета "Посещаемое"
*/
function ServicesWidget({
  items,
  link,
  title
}) {
  return (
    <Widget
      title={title}
      link={link}
    >
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href={item.link}>
              <b>{item.title}</b> - {item.text}
            </a>
          </li>
        ))}
      </ul>
    </Widget>
  );
}

ServicesWidget.propTypes = {
  /** Список посещаемых сервисов */
  items: PropTypes.array,
  /** Ссылка на раздел сервисов */
  link: PropTypes.string,
  /** Заголовок виджета */
  title: PropTypes.string
};

ServicesWidget.defaultProps = {
  items: []
};

export default ServicesWidget;
