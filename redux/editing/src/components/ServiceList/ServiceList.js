import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeServiceField,
  removeService,
  setEditableServiceId
} from './../../actions/serviceActions';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  const handleEdit = id => {
    const item = items.find(item => item.id === id);
    const { name, price } = item;

    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
    dispatch(setEditableServiceId(id));
  };

  return (
    <ul className="ServiceList">
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}

          <button onClick={() => handleEdit(o.id)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
