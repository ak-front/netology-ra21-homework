import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addService,
  changeServiceField,
  setEditableServiceId,
  updateService
} from './../../actions/serviceActions';

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleCancel = event => {
    event.preventDefault();
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
    dispatch(setEditableServiceId(null));
  }

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));

    if (item.editableId === null) {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(updateService(item.editableId, item.name, item.price));
      dispatch(setEditableServiceId(null));
    }
  };

  return (
    <form
      className="ServiceAdd"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        value={item.name}
        onChange={handleChange}
      />
      <input
        name="price"
        onChange={handleChange}
        value={item.price}
      />
      <button>Save</button>
      {item.editableId !== null && (
        <button
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ServiceAdd;
