import React from 'react';
import PropTypes from 'prop-types';

import NewsTabsNav from './NewsTabsNav';
import NewsList from './../NewsList';

/**
 * Компонент "Табы новостей"
 */
function NewsTabs({
  items,
  selectedIndex
}) {
  return (
    <div>
      <NewsTabsNav>
        {items.map(item => (
          <span key={item.label}>{item.label}</span>
        ))}
      </NewsTabsNav>
      {items.map(item => (
        <div key={item.label}>
          <NewsList items={item.news} />
        </div>
      ))}
    </div>
  );
}

NewsTabs.propTypes = {
  /** Список новостей и их категорий */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    news: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string,
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }))
  })),
  /** Индекс активного таба */
  selectedIndex: PropTypes.number
};

NewsTabs.defaultProps = {
  nav: [],
  panels: [],
  selectedIndex: 0
};

export default NewsTabs;
