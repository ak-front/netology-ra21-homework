import React from 'react';
import PropTypes from 'prop-types';

import withAggregation from './../../hoc/withAggregation';

function MonthTable({ list }) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

MonthTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number,
    month: PropTypes.string
  }))
};

MonthTable.defaultProps = {
  list: []
};

export default withAggregation('groupByMonths')(MonthTable);
