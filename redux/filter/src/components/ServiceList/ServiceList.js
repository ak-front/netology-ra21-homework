import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeServiceField,
  removeService,
  setEditableServiceId
} from './../../actions/serviceActions';

import ServiceFilterContext from './../../contexts/ServiceFilterContext';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const { filter } = useContext(ServiceFilterContext);
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

  const filteredItems = filter !== ''
    ? items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    : items;

  return (
    <ul className="ServiceList">
      {filteredItems.map(o => (
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
