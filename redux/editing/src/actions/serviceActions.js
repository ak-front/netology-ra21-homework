import {
  ADD_SERVICE,
  CHANGE_SERVICE_FIELD,
  REMOVE_SERVICE,
  SET_EDITABLE_SERVICE_ID,
  UPDATE_SERVICE
} from './actionTypes';

export function addService(name, price) {
  return {
    type: ADD_SERVICE,
    payload: {name, price}
  };
};

export function changeServiceField(name, value) {
  return {
    type: CHANGE_SERVICE_FIELD,
    payload: {name, value}
  };
};

export function removeService(id) {
  return {
    type: REMOVE_SERVICE,
    payload: {id}
  };
};

export function setEditableServiceId(id) {
  return {
    type: SET_EDITABLE_SERVICE_ID,
    payload: {id}
  };
};

export function updateService(id, name, price) {
  return {
    type: UPDATE_SERVICE,
    payload: {id, name, price}
  };
};
