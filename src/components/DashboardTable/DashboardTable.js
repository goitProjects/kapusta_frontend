import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import DeleteCostsModal from '../DeleteCostsModal/DeleteCostsModal';
import st from './DashboardTable.module.css';

function DashboardTable(props) {
  const { data } = props;
  const isModalDelete = useSelector(state => state.global.isModalDelete);

  return (
    <>
      <table className={st.table}>
        <thead className={st.head}>
          <tr className={st.headerRow}>
            <th width="19%" className={st.headerCell}>
              Дата
            </th>
            <th width="30%" className={st.headerCell}>
              Описание
            </th>
            <th width="19%" className={st.headerCell}>
              Категория
            </th>
            <th width="25%" className={st.headerCellAmount}>
              Сумма
            </th>
            <th width="7%" className={st.headerCell} />
          </tr>
        </thead>
        <tbody className={st.body}>
          {data.map(dataItem => (
            <tr key={dataItem.id} className={st.dataRow}>
              <td className={st.dataCell} width="19%">
                {moment(dataItem.date).format('DD.MM.YYYY')}
              </td>
              <td className={st.dataCell} width="30%">
                {dataItem.description}
              </td>
              <td className={st.dataCell} width="19%">
                {dataItem.category}
              </td>
              <td className={st.dataCellAmount} width="25%">
                {dataItem.amount} грн.
              </td>
              <td className={st.dataCell} width="7%">
                <ButtonDelete transactionID={dataItem.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalDelete && <DeleteCostsModal />}
    </>
  );
}

DashboardTable.propTypes = {
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

export default DashboardTable;
