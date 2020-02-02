import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import EditPost from './../EditPost';

const { REACT_APP_POSTS_URL } = process.env;

function Post({
  content,
  created,
  id
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [postContent, setPostContent] = useState(content);
  const history = useHistory();
  let abortController = useRef();

  const deletePost = async () => {
    try {
      abortController.current = new AbortController();
      const signal = abortController.current.signal;

      setIsDeleting(true);

      const response = await fetch(`${REACT_APP_POSTS_URL}/${id}`, {
        method: 'delete',
        signal
      });

      setIsDeleting(false);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteButtonClick = () => {
    if (!isDeleting) {
      deletePost();
    }
  };

  const handleEditButtonClick = () => {
    if (!isDeleting) {
      setIsEditing(true);
    }
  };

  const handleCloseEditPostClick = () => {
    setIsEditing(false);
  };

  const handleSaveEditPostSuccess = newPostContent => {
    setPostContent(newPostContent);
    setIsEditing(false);
  };

  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, []);

  return (isEditing ? (
    <EditPost
      id={id}
      content={postContent}
      onCloseClick={handleCloseEditPostClick}
      onSaveSuccess={handleSaveEditPostSuccess}
    />
  ) : (
    <div className="post">
      <time className="post__date">
        {(new Date(created)).toLocaleDateString()}
      </time>
      <p className="post__text">
        {postContent}
      </p>
      <div className="post__actions">
        <button
          className="button button--blue"
          disabled={isDeleting}
          type="button"
          onClick={handleEditButtonClick}
        >
          Изменить
        </button>
        <button
          className="button button--red"
          disabled={isDeleting}
          type="button"
          onClick={handleDeleteButtonClick}
        >
          {isDeleting ? 'Удаляем...' : 'Удалить'}
        </button>
      </div>
    </div>
  ));
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default Post;
