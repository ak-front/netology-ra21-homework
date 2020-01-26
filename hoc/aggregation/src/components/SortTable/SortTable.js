import React from 'react';
import PropTypes from 'prop-types';

import withAggregation from './../../hoc/withAggregation';

function SortTable({ list }) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

SortTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string
  }))
};

SortTable.defaultProps = {
  list: []
};

export default withAggregation('sortDesc')(SortTable);
