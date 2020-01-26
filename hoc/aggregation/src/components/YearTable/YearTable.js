import React from 'react';
import PropTypes from 'prop-types';

import withAggregation from './../../hoc/withAggregation';

function YearTable({ list }) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

YearTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number,
    year: PropTypes.number
  }))
};

YearTable.defaultProps = {
  list: []
};

export default withAggregation('groupByYears')(YearTable);
