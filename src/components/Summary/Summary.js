import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

import st from './Summary.module.css';

const Summary = props => {
  const { data, handler } = props;
  moment.locale('ru');

  return (
    <div className={st.table}>
      <h3 className={st.tableHeadStr}>Сводка</h3>
      {data.map((monthData, index) =>
        monthData.month ? (
          <button
            type="button"
            key={moment(monthData.month).format('YYYYMM')}
            value={moment(monthData.month).format('YYYYMM')}
            onClick={handler}
            className={monthData.isActive ? st.tableActiveStr : st.tableStr}
          >
            <p className={st.tableMonth}>
              {moment(monthData.month, 'YYYYMM').format('MMMM, YYYY')}
            </p>
            <p className={st.tableAmount}>
              {monthData.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')}{' '}
              грн
            </p>
          </button>
        ) : (
          <div key={String(index)} className={st.tableStr}>
            <p className={st.tableMonth}>-</p>
            <p className={st.tableAmount}>-</p>
          </div>
        ),
      )}
    </div>
  );
};

Summary.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      month: PropTypes.object,
      amount: PropTypes.number,
      isActive: PropTypes.bool,
    }).isRequired,
  ).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Summary;
