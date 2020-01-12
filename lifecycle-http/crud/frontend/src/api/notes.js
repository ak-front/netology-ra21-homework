import axios from 'axios';

const { REACT_APP_NOTES_URL } = process.env;

export const addNote = content => {
  return axios.post(REACT_APP_NOTES_URL, {content});
};

export const deleteNote = id => {
  return axios.delete(`${REACT_APP_NOTES_URL}/${id}`);
};

export const fetchNotes = () => {
  return axios
    .get(REACT_APP_NOTES_URL)
    .then(response => response.data);
};
