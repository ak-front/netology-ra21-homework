import axios from 'axios';

const { REACT_APP_MESSAGES_URL } = process.env;

export const addMessage = message => {
  return axios
    .post(REACT_APP_MESSAGES_URL, {...message});
};

export const getMessages = from => {
  return axios
    .get(REACT_APP_MESSAGES_URL, {params: {from}})
    .then(response => response.data);
};
