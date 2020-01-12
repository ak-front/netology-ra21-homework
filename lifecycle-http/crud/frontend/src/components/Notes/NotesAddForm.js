import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function NotesAddForm({
  isLoading,
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
  const isButtonDisabled = isLoading || content === '';

  return (
    <form
      className="Notes-addForm"
      onSubmit={handleSubmit}
    >
      <label htmlFor="content">New note</label>
      <textarea
        id="content"
        name="content"
        value={content}
        onChange={handleChange}
      />
      <button disabled={isButtonDisabled}>
        {isLoading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            size="lg"
            spin
          />
        ) : (
          <>Добавить</>
        )}
      </button>
    </form>
  );
}

NotesAddForm.propTypes = {
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func
};

NotesAddForm.defaultProps = {
  onSubmit: () => null
};

export default NotesAddForm;
