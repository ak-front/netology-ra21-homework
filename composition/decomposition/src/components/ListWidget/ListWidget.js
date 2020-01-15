import React from 'react';
import PropTypes from 'prop-types';

import Widget from './../Widget';

/**
 * Компонент "Виджет с кастомным списком"
 */
function ListWidget({
  children,
  items,
  link,
  title
}) {
  return (
    <Widget
      link={link}
      title={title}
    >
      {children(items)}
    </Widget>
  );
}

ListWidget.propTypes = {
  /** Функция, как дочерние элементы */
  children: PropTypes.func,
  /** Список пунктов */
  items: PropTypes.array,
  /** Ссылка на раздел */
  link: PropTypes.string,
  /** Заголовок виджета */
  title: PropTypes.string
};

ListWidget.defaultProps = {
  items: []
};

export default ListWidget;
