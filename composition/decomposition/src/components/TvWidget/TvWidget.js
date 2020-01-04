import React from 'react';
import PropTypes from 'prop-types';

import Widget from './../Widget';

/**
 * Компонент виджета "Телепрограмма"
*/
function TvWidget({
  items,
  link,
  title
}) {
  return (
    <Widget
      link={link}
      title={title}
    >
      <ul>
        {items.map(item => (
          <li>
            <a href={item.link}>
              <span>{item.time}</span>
              <span>{item.name}</span>
              <span>{item.channel}</span>
            </a>
          </li>
        ))}
      </ul>
    </Widget>
  );
}

TvWidget.propTypes = {
  /** Список программ */
  items: PropTypes.array,
  /** Ссылка на раздел телепрограммы */
  link: PropTypes.string,
  /** Заголовок виджета */
  title: PropTypes.string
};

export default TvWidget;
