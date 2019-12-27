import React, { useState } from 'react';
import nanoid from 'nanoid';
import moment from 'moment';
import 'moment/locale/ru';

import StepsForm from './StepsForm';
import StepsTable from './StepsTable';

import './Steps.css';

moment.locale('ru');

function Steps(props) {
  const [steps, setSteps] = useState([]);
  const handleFormSubmit = item => {
    const newItem = {
      ...item,
      id: nanoid()
    };

    setSteps(prevSteps => {
      if (prevSteps.some(prevItem => moment(prevItem.date).isSame(item.date))) {
        return prevSteps.map(prevItem => {
          if (moment(prevItem.date).isSame(item.date)) {
            return {
              ...prevItem,
              distance: prevItem.distance + item.distance
            };
          }

          return prevItem;
        });
      }

      return [...prevSteps, newItem];
    });
  };
  const handleItemRemove = id => {
    setSteps(prevSteps => {
      return prevSteps.filter(item => item.id !== id);
    });
  };

  return (
    <div className="Steps">
      <StepsForm onSubmit={handleFormSubmit} />
      <StepsTable
        items={steps}
        onItemRemove={handleItemRemove}
      />
    </div>
  );
}

export default Steps;
