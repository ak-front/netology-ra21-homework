import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSync } from '@fortawesome/free-solid-svg-icons';

import * as apiNotes from './../../api/notes';

import NotesAddForm from './NotesAddForm';
import NotesList from './NotesList';

import './Notes.css';

class Notes extends Component {
  state = {
    deletingIds: [],
    isAdding: false,
    isDeleting: false,
    isFetching: false,
    notes: []
  }

  componentDidMount() {
    this.fetchNotes();
  }

  addNote(content) {
    this.setState({
      isAdding: true
    });

    apiNotes.addNote(content)
      .then(() => {
        this.setState({
          isAdding: false
        });
        this.fetchNotes();
      })
      .catch(() => {
        this.setState({
          isAdding: false
        });
      });
  }

  deleteNote(id) {
    const { deletingIds } = this.state;

    this.setState({
      deletingIds: [
        ...deletingIds,
        id
      ],
      isDeleting: true
    });

    apiNotes.deleteNote(id)
      .then(() => {
        this.setState(prevState => {
          return {
          ...prevState,
          deletingIds: prevState.deletingIds.filter(deletingId => deletingId !== id),
          isDeleting: false
        }});
        this.fetchNotes();
      })
      .catch(() => {
        this.setState(prevState => ({
          ...prevState,
          deletingIds: prevState.deletingIds.filter(deletingId => deletingId !== id),
          isDeleting: false
        }));
      });
  }

  fetchNotes() {
    const { isFetching } = this.state;

    if (isFetching) {
      return;
    }

    this.setState({
      isFetching: true
    });

    apiNotes.fetchNotes()
      .then(notes => {
        this.setState({
          notes,
          isFetching: false
        });
      })
      .catch(() => {
        this.setState({
          isFetching: false
        });
      });
  }

  handleAddFormSubmit = noteContent => {
    this.addNote(noteContent);
  }

  handleNoteDelete = id => {
    this.deleteNote(id);
  }

  handleUpdateClick = () => {
    this.fetchNotes();
  }

  render() {
    const {
      deletingIds,
      isAdding,
      isDeleting,
      isFetching,
      notes
    } = this.state;

    return (
      <div className="Notes">
        <h1>
          Notes
          {' '}
          <button
            className="Notes-updateButton"
            disabled={isAdding || isDeleting || isFetching}
            type="button"
            onClick={this.handleUpdateClick}
          >
            {isFetching ? (
              <FontAwesomeIcon
                icon={faSpinner}
                size="lg"
                spin
              />
            ) : (
              <FontAwesomeIcon
                icon={faSync}
                size="lg"
              />
            )}
          </button>
        </h1>
        <NotesList
          deletingIds={deletingIds}
          items={notes}
          onNoteDelete={this.handleNoteDelete}
        />
        <NotesAddForm
          isLoading={isAdding}
          onSubmit={this.handleAddFormSubmit}
        />
      </div>
    );
  }
}

export default Notes;
