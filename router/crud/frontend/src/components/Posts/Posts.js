import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Posts({ list }) {
  return (list.length > 0 ? (
    <div className="posts">
      {list.map(item => (
        <Link
          className="post"
          key={item.id}
          to={`/posts/${item.id}`}
        >
          <time className="post__date">
            {(new Date(item.created)).toLocaleDateString()}
          </time>
          <p className="post__text">
            {item.content}
          </p>
        </Link>
      ))}
    </div>
  ) : (
    <p>Нет ни одного поста :(</p>
  ));
}

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.number
  }))
};

Posts.defaultProps = {
  list: []
};

export default Posts;
