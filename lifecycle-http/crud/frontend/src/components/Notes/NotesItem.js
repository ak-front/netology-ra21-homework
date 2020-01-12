import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSync } from '@fortawesome/free-solid-svg-icons';

function NotesItem({
  content,
  id,
  isDeleting,
  onDelete
}) {
  const handleDeleteClick = () => {
    if (isDeleting) {
      return;
    }

    onDelete(id);
  };

  return (
    <div className="Notes-item">
      <button
        className="Notes-itemDelete"
        disabled={isDeleting}
        type="button"
        onClick={handleDeleteClick}
      >
        {isDeleting ? (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
          />
        ) : (
          <>&times;</>
        )}
      </button>
      <p>{content}</p>
    </div>
  );
}

NotesItem.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDeleting: PropTypes.bool,
  onDelete: PropTypes.func
};

NotesItem.defaultProps = {
  onDelete: () => null
};

export default NotesItem;
