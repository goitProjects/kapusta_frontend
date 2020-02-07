import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AddCost from '../AddCost/AddCost';
import DashboardTable from '../DashboardTable/DashboardTable';
import DashboardList from '../DashboardList/DashboardList';
import Summary from '../Summary/Summary';

import { useWindowSize } from '../../utils/hooks';
import { getTransactionsOperation } from '../../redux/transactions/operations';

import st from './DashboardPanel.module.css';

function DashboardPanel() {
  const { width } = useWindowSize();
  const [isAddModal, setIsAddModal] = useState(false);
  const [isAddModal2, setIsAddModal2] = useState(false);
  const [date, setDate] = useState(moment(new Date()));
  const dispatch = useDispatch();
  const costs = useSelector(state => state.transactions.costs);

  const handleChangeDate = async e => {
    await setDate(moment(e.currentTarget.value, 'YYYYMM'));
  };

  useEffect(() => {
    const getTransactions = () => dispatch(getTransactionsOperation());
    getTransactions();
  }, [dispatch]);
  const tableData = costs
    .filter(
      cost =>
        moment(cost.date, 'YYYY-MM-DD').year() === moment(date).year() &&
        moment(cost.date, 'YYYY-MM-DD').month() === moment(date).month(),
    )
    .sort((currCost, nextCost) => {
      return (
        moment(nextCost.date, 'YYYY-MM-DD HH:mm:ss.SSS').unix() -
        moment(currCost.date, 'YYYY-MM-DD HH:mm:ss.SSS').unix()
      );
    })
    .map(cost => {
      return {
        id: cost.costsId,
        date: moment(cost.date, 'YYYY-MM-DD HH:mm:ss.SSS'),
        description: cost.product.name,
        category: cost.product.category.name,
        amount: cost.amount,
      };
    });

  const summaryData = [
    moment(new Date()),
    moment(new Date()),
    moment(new Date()),
    moment(new Date()),
    moment(new Date()),
    moment(new Date()),
  ]
    .map((month, index) => month.subtract(index, 'months'))
    .map(m => m.year() * 100 + m.month() + 1)
    .map(sortedUniqMonth => {
      return {
        month: moment(sortedUniqMonth, 'YYYYMM'),
        amount: costs.reduce((total, cost) => {
          return sortedUniqMonth ===
            moment(cost.date).year() * 100 + moment(cost.date).month() + 1
            ? total + cost.amount
            : total;
        }, 0),
        isActive:
          sortedUniqMonth ===
          moment(date).year() * 100 + moment(date).month() + 1,
      };
    });

  return (
    <div className={st.PanelContainer1}>
      {width < 768 && isAddModal && (
        <div>
          <AddCost
            setIsAddModal={setIsAddModal}
            className={st.AddTransaction}
          />
          <button
            className={st.buttonModal_back}
            type="button"
            onClick={() => setIsAddModal(prev => !prev)}
          >
            назад
          </button>
        </div>
      )}
      {width < 768 && isAddModal2 && (
        <>
          <Summary
            className={st.SummaryTable}
            data={summaryData}
            handler={handleChangeDate}
          />
          <button
            className={st.buttonModal_back}
            type="button"
            onClick={() => setIsAddModal2(prev => !prev)}
          >
            назад
          </button>
          {/* <DashboardList className={st.TransactionsList} data={tableData} /> */}
        </>
      )}
      {width < 768 && !isAddModal && !isAddModal2 && (
        <>
          <div className={st.yy}>
            <div className={st.buttonForModal}>
              <button
                className={st.buttonModal}
                type="button"
                onClick={() => setIsAddModal(prev => !prev)}
              >
                внесем расходы
              </button>
              <button
                className={st.buttonModal}
                type="button"
                onClick={() => setIsAddModal2(prev => !prev)}
              >
                зайти в статистику
              </button>
            </div>
          </div>
          <DashboardList className={st.TransactionsList} data={tableData} />
        </>
      )}
      {width < 768 && !isAddModal2 && (
        <>
          {/* <DashboardList className={st.TransactionsList} data={tableData} /> */}
        </>
      )}
      {width >= 768 && (
        <>
          <AddCost className={st.AddTransaction} />
          <div className={st.TablesContainer}>
            <DashboardTable className={st.TransactionsTable} data={tableData} />
            <Summary
              className={st.SummaryTable}
              data={summaryData}
              handler={handleChangeDate}
            />
          </div>
          <div className={st.PanelContainer} />
        </>
      )}
    </div>
  );
}

export default DashboardPanel;
