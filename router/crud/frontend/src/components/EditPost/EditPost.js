import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';

const { REACT_APP_POSTS_URL } = process.env;

function EditPost({
  content,
  id,
  placeholder,
  saveButtonDefaultText,
  saveButtonProcessText,
  onCloseClick,
  onSaveSuccess
}) {
  const [postContent, setPostContent] = useState(content);
  const [isSaving, setIsSaving] = useState(false);
  let abortController = useRef();

  const savePost = async () => {
    try {
      abortController.current = new AbortController();
      const signal = abortController.current.signal;

      setIsSaving(true);

      const response = await fetch(REACT_APP_POSTS_URL, {
        method: 'post',
        body: JSON.stringify({
          id,
          content: postContent
        }),
        signal
      });

      console.log(response);

      setIsSaving(false);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      onSaveSuccess(postContent);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = event => {
    const { value } = event.target;

    setPostContent(value);
  };

  const handleSubmit = event => {
    if (
      !isSaving
      && postContent !== ''
    ) {
      savePost();
    }

    event.preventDefault();
  };

  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, []);

  return (
    <div className="new-post">
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={isSaving}
          placeholder={placeholder}
          value={postContent}
          onChange={handleChange}
        />
        <div className="new-post__actions">
          <button
            className="button button--blue"
            disabled={isSaving}
          >
            {isSaving ? saveButtonProcessText : saveButtonDefaultText}
          </button>
          <button
            className="button button--close"
            aria-label="Закрыть"
            onClick={onCloseClick}
          />
        </div>
      </form>
    </div>
  );
}

EditPost.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  placeholder: PropTypes.string,
  saveButtonDefaultText: PropTypes.string,
  saveButtonProcessText: PropTypes.string,
  onCloseClick: PropTypes.func,
  onSaveSuccess: PropTypes.func
};

EditPost.defaultProps = {
  id: 0,
  content: '',
  placeholder: 'Пост, относящийся к курсу React',
  saveButtonDefaultText: 'Сохранить',
  saveButtonProcessText: 'Сохраняем...',
  onCloseClick: () => null,
  onSaveSuccess: () => null
}

export default EditPost;
