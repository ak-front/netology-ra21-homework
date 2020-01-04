import React from 'react';
import PropTypes from 'prop-types';

import VirtualKeyboard from './../VirtualKeyboard';

/**
 * Компонент "Поиск на сайте".
 */
function Search({
  tabs,
  sample
}) {
  return (
    <div>
      <div>
        {tabs.map(tab => (
          <span key={tab.label}>
            <a href={tab.url}>{tab.label}</a>
          </span>
        ))}
      </div>
      <form>
        <input type="text" />
        <VirtualKeyboard />
        <button>Найти</button>
      </form>
      {sample && (
        <div>Найдётся всё. Например, <a href="#">{sample}</a></div>
      )}
    </div>
  );
}

Search.propTypes = {
  /** Пример комбинации слов для поиска */
  sample: PropTypes.string,
  /** Список всех пунктов поиска */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  }))
};

Search.defaultProps = {
  tabs: []
};

export default Search;
