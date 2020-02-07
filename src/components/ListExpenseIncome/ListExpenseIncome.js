import React from 'react';
import PropTypes from 'prop-types';

import { Delete } from '../../assets/icons/index';

import st from './ListExpenseIncome.module.css';

function ListExpenseIncome(props) {
  const { mode } = props;

  const { data } = props;

  return (
    <ul className={st.list}>
      {data.map(dataItem => (
        <li key={dataItem.id} className={st.listItem}>
          <div className={st.listItem__descriptionBlock}>
            <p className={st.listItem__amount}>{dataItem.description}</p>
            <div className={st.listItem__dateBlock}>
              <p className={st.listItem__amount}>{dataItem.date}</p>
              <p className={st.listItem__amount}>{dataItem.category}</p>
            </div>
          </div>
          <p
            className={
              mode === 'expense'
                ? st.listItem__amountExpense
                : st.listItem__amountIncome
            }
          >
            {dataItem.amount}
          </p>

          <button type="button" className={st.listItem__deleteButton}>
            <Delete />
          </button>
        </li>
      ))}
    </ul>
  );
}

ListExpenseIncome.propTypes = {
  mode: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

ListExpenseIncome.defaultProps = {
  mode: 'expense',
};

export default ListExpenseIncome;
