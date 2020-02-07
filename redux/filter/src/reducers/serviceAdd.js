import {
  CHANGE_SERVICE_FIELD,
  SET_EDITABLE_SERVICE_ID
} from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
  editableId: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value
      };
    }

    case SET_EDITABLE_SERVICE_ID: {
      const { id } = action.payload;

      return {
        ...state,
        editableId: id
      };
    }

    default: {
      return state;
    }
  }
}