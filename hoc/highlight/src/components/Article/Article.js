import React from 'react';
import PropTypes from 'prop-types';

function Article({
  title,
  views
}) {
  return (
    <div className="item item-article">
      <h3><a href="#">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  views: PropTypes.number
};

Article.defaultProps = {
  views: 0
};

export default Article;
