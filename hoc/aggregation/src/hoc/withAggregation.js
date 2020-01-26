import React from 'react';
import groupBy from 'lodash/groupBy';

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const groupByMonths = data => {
  const currentYear = (new Date()).getFullYear();
  const filteredDataByYear = data.filter(item => item.date.indexOf(currentYear) !== -1);
  const groupedData = groupBy(filteredDataByYear, item => {
    return (new Date(item.date)).getMonth();
  });

  return Object.keys(groupedData).map(month => ({
    id: month,
    amount: groupedData[month].reduce((a, b) => a + b.amount, 0),
    month: MONTHS_SHORT[month]
  }));
};

const groupByYears = data => {
  const groupedData = groupBy(data, item => {
    return item.date.substring(0, 4);
  });

  return Object.keys(groupedData).map(year => ({
    id: year,
    amount: groupedData[year].reduce((a, b) => a + b.amount, 0),
    year: parseInt(year, 10)
  }));
};

const sortDesc = data => {
  return data.sort((a, b) => b.amount - a.amount);
};

function withAggregation(method) {
  return function (WrappedComponent) {
    function WithAggregation(props) {
      const { list } = props;

      switch (method) {
        case 'groupByMonths': {
          return (
            <WrappedComponent list={groupByMonths(list)} />
          );
        }

        case 'groupByYears': {
          return (
            <WrappedComponent list={groupByYears(list)} />
          );
        }

        case 'sortDesc': {
          return <WrappedComponent list={sortDesc(list)} />
        }

        default: {
          return <WrappedComponent {...props} />
        }
      }
    }

    WithAggregation.displayName = `WithAggregation(${getDisplayName(WrappedComponent)})`;

    return WithAggregation;
  }
}

export default withAggregation;

