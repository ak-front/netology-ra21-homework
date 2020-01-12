import React from 'react';
import PropTypes from 'prop-types';

import NotesItem from './NotesItem';

function NotesList({
  deletingIds,
  items,
  onNoteDelete
}) {
  return (items.length > 0 && (
    <div className="Notes-list">
      {items.map(item => (
        <div
          key={item.id}
          className="Notes-listItem"
        >
          <NotesItem
            content={item.content}
            id={item.id}
            isDeleting={deletingIds.findIndex(id => id === item.id) !== -1}
            onDelete={onNoteDelete}
          />
        </div>
      ))}
    </div>
  ));
}

NotesList.propTypes = {
  deletingIds: PropTypes.arrayOf(PropTypes.number),
  items: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })),
  onNoteDelete: PropTypes.func
};

NotesList.defaultProps = {
  deletingIds: [],
  items: [],
  onNoteDelete: () => null
};

export default NotesList;
