import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';

const MOMENT_FORMAT_DATE = 'DD.MM.YYYY';

function StepsTable({
  items,
  onItemRemove
}) {
  const sortedItems = [...items];
  sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (sortedItems.length > 0 && (
    <table className="Steps-table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th className="u-TextCenter">Пройдено км</th>
          <th className="u-TextCenter">Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map(item => (
          <tr key={item.id}>
            <td>{moment(item.date).format(MOMENT_FORMAT_DATE)}</td>
            <td className="u-TextCenter">{item.distance}</td>
            <td className="u-TextCenter">
              {/* Редактирование не реализовывал */}
              <button
                className="Steps-actionButton"
                type="button"
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button
                className="Steps-actionButton"
                type="button"
                onClick={() => onItemRemove(item.id)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ));
}

StepsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    distance: PropTypes.number.isRequired
  })),
  onItemRemove: PropTypes.func
};

StepsTable.defaultProps = {
  items: [],
  onItemRemove: () => null
};

export default StepsTable;
