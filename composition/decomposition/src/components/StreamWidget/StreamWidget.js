
import React from 'react';
import PropTypes from 'prop-types';

import Widget from './../Widget';

/**
 * Компонент виджета "Эфир"
*/
function StreamWidget({
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
          <li key={item.id}>
            <a href={item.link}>
              {item.title}
              {item.info}
            </a>
          </li>
        ))}
      </ul>
    </Widget>
  );
}

StreamWidget.propTypes = {
  /** Список эфиров */
  items: PropTypes.array,
  /** Ссылка на раздел с эфирами */
  link: PropTypes.string,
  /** Заголовок виджета */
  title: PropTypes.string
};

export default StreamWidget;
