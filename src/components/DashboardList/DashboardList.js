import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import DeleteCostsModal from '../DeleteCostsModal/DeleteCostsModal';
import st from './DashboardList.module.css';

function DashboardList(props) {
  const { data } = props;
  const isModalDelete = useSelector(state => state.global.isModalDelete);

  return (
    <>
      <ul className={st.list}>
        {data.map(dataItem => (
          <li key={dataItem.id} className={st.listItem}>
            <div className={st.listItem__descriptionBlock}>
              <p className={st.listItem__description}>{dataItem.description}</p>
              <div className={st.listItem__dateBlock}>
                <p className={st.listItem__date}>
                  {moment(dataItem.date).format('DD.MM.YYYY')}
                </p>
                <p className={st.listItem__category}>{dataItem.category}</p>
              </div>
            </div>
            <p className={st.listItem__amountExpense}>{dataItem.amount} грн.</p>
            <ButtonDelete
              className={st.listItem__amountExpense_btn}
              transactionID={dataItem.id}
            />
          </li>
        ))}
      </ul>
      {isModalDelete && <DeleteCostsModal />}
    </>
  );
}

DashboardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      date: PropTypes.object.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DashboardList;
