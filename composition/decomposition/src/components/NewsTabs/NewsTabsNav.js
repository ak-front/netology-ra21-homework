import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Пунктов табов новостей и текущей даты". По клику переключаются табы и меняется список новостей.
 */
function NewsTabsNav({
  children,
  selectedIndex,
  onItemClick
}) {
  return (
    <div>
      {children}
      <span>31 июля, среда 02 32</span>
    </div>
  );
}

NewsTabsNav.propTypes = {
  /** Список пунктов табов, которые в последствии будем проверять (массив/не массив) и устанавливать на них обработчик onItemClick */
  children: PropTypes.node,
  /** Индекс активного пункта табов */
  selectedIndex: PropTypes.number,
  /** Обработчик клика по определённому пункту */
  onItemClick: PropTypes.func
};

NewsTabsNav.defaultProps = {
  selectedIndex: 0
};

export default NewsTabsNav;
