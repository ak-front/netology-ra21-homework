import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ChatForm({
  isSubmitting,
  onSubmit
}) {
  const [content, setContent] = useState('');
  const handleChange = event => {
    setContent(event.target.value);
  };
  const handleSubmit = event => {
    if (content !== '') {
      onSubmit(content);
      setContent('');
    }

    event.preventDefault();
  };

  return (
    <form
      className="Chat-form"
      onSubmit={handleSubmit}
    >
      <textarea
        disabled={isSubmitting}
        name="content"
        value={content}
        onChange={handleChange}
      />
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Добавляем...' : 'Добавить'}
      </button>
    </form>
  );
}

ChatForm.propTypes = {
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func
};

ChatForm.defaultProps = {
  onSubmit: () => null
};

export default ChatForm;
