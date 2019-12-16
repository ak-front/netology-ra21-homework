import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const DAYS_IN_WEEK = 7;
const CURRENT_DATE = 'CURRENT_DATE';
const NEXT_MONTH = 'NEXT_MONTH';
const PREV_MONTH = 'PREV_MONTH';

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

const getDaysBeetween = (startDate, endDate, date, arrayDays) => {
  if (!moment(startDate).isSameOrAfter(endDate)) {
    if (arrayDays.length === 0) {
      arrayDays.push({
        date: moment(startDate).format(),
        day: moment(startDate).date(),
        type: getRelativeDateType(startDate, date)
      });
    }

    const nextDate = moment(startDate).add(1, 'd');

    if (!nextDate.isSameOrAfter(endDate)) {
      arrayDays.push({
        date: nextDate.format(),
        day: nextDate.date(),
        type: getRelativeDateType(nextDate, date)
      });
      getDaysBeetween(nextDate, endDate, date, arrayDays);
    }
  }

  return arrayDays;
};

const getDayClassName = type => {
  switch (type) {
    case CURRENT_DATE: {
      return 'ui-datepicker-today';
    }

    case NEXT_MONTH:
    case PREV_MONTH: {
      return 'ui-datepicker-other-month';
    }

    default: {
      return null;
    }
  }
};

const getDaysForDisplay = date => {
  const momentFirstDateOfMonth = moment(date).startOf('month');
  const momentLastDateOfMonth = moment(date).endOf('month');
  const momentStartDate = moment(date)
    .startOf('month')
    .subtract(Math.abs(momentFirstDateOfMonth.isoWeekday() - 1), 'day');
  const momentEndDate = moment(date)
    .endOf('month')
    .add(DAYS_IN_WEEK - momentLastDateOfMonth.isoWeekday(), 'day');

  return getDaysBeetween(momentStartDate.format(), momentEndDate.format(), date, []);
};

const getDaysByWeeksForDisplay = date => {
  const daysForDisplay = getDaysForDisplay(date);

  return [...Array(daysForDisplay.length / DAYS_IN_WEEK)].map((item, index) => {
    return daysForDisplay.slice(index * DAYS_IN_WEEK, (index + 1) * DAYS_IN_WEEK);
  });
};

const getRelativeDateType = (checkDate, mainDate) => {
  const momentCheckDate = moment(checkDate);

  if (momentCheckDate.isBefore(mainDate, 'month')) {
    return PREV_MONTH;
  }

  if (momentCheckDate.isAfter(mainDate, 'month')) {
    return NEXT_MONTH;
  }

  if (
    momentCheckDate.isSame(mainDate, 'day')
    && momentCheckDate.isSame(mainDate, 'month')
    && momentCheckDate.isSame(mainDate, 'year')
  ) {
    return CURRENT_DATE;
  }

  return '';
};

const getWeekdaysTitles = () => {
  const localeData = moment.localeData();
  const weekdaysFull = [...localeData.weekdays()];
  const weekdaysMin = [...localeData.weekdaysMin()];

  weekdaysFull.push(weekdaysFull.shift());
  weekdaysMin.push(weekdaysMin.shift());

  return weekdaysFull.map((weekday, index) => {
    return {
      full: weekday,
      min: weekdaysMin[index]
    };
  });
};

const weekdaysTitles = getWeekdaysTitles();

function Calendar({ date }) {
  const momentDate = moment(date);
  const momentDay = momentDate.date();
  const momentYear = momentDate.year();
  const momentFormatDay = momentDate.format('dddd');
  const momentFormatMonth = momentDate.format('MMMM');
  const momentFormatMonthWithPlural = momentDate.format('D MMMM').split(' ')[1];

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {capitalizeFirstLetter(momentFormatDay)}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{momentDay}</div>
          <div className="ui-datepicker-material-month">{momentFormatMonthWithPlural}</div>
          <div className="ui-datepicker-material-year">{momentYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{momentFormatMonth}</span>
          &nbsp;
          <span className="ui-datepicker-year">{momentYear}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            {weekdaysTitles.map(weekdayTitle => (
              <th
                key={weekdayTitle.min}
                scope="col"
                title={capitalizeFirstLetter(weekdayTitle.full)}
              >
                {weekdayTitle.min}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getDaysByWeeksForDisplay(date).map((week, index) => (
            // Плохой key
            <tr key={index}>
              {week.map(({ date, day, type }) => (
                <td
                  className={getDayClassName(type)}
                  key={date}
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date)
};

export default Calendar;
