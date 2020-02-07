import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './StatisticMenu.module.css';
import { ReactComponent as Arrow } from '../../assets/icons/left-arrow.svg'; // without this line it didn't work

moment.locale('ru');

const StatisticMenu = ({
  monthChanger,
  date,
  backMonthHandler,
  nextMonthHandler,
  balance,
}) => {
  const history = useHistory();
  const location = useLocation();

  const isStatistics = location.pathname.split('/')[1] === 'statistics';

  const handleClickBack = () => {
    history.push('/');
  };

  return (
    <div className={styles.wrap}>
      {isStatistics && (
        <button
          className={styles.arrowBtn}
          type="button"
          onClick={handleClickBack}
        >
          <Arrow className={styles.arrowSvg} />
          <p className={styles.backText}>Вернуться на главную</p>
          <p className={styles.backTextTabl}>На главную</p>
        </button>
      )}
      <div className={styles.dateBalanceWrap}>
        <p className={styles.dateBalance}>
          Баланс на {moment().format('DD.MM.YYYY')}:
        </p>
        <p className={styles.dateBalanceSumBalance}>
          Баланс :
          {balance.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'UAH',
          })}
        </p>

        <p className={styles.dateBalanceSum}>
          {balance.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'UAH',
          })}
        </p>
      </div>
      <div className={styles.calendarWrap}>
        <p className={styles.calendarText}>Текущий период :</p>
        <div className={styles.switchWrap}>
          <button
            type="button"
            className={
              backMonthHandler ? styles.calendarBtnDisabled : styles.calendarBtn
            }
            onClick={monthChanger}
            name="leftBtn"
            disabled={backMonthHandler}
          >
            &#9664;
          </button>
          <p className={styles.cldrMonth}>{moment(date).format('MMMM YYYY')}</p>
          <button
            type="button"
            className={
              nextMonthHandler ? styles.calendarBtnDisabled : styles.calendarBtn
            }
            onClick={monthChanger}
            name="rightBtn"
            disabled={nextMonthHandler}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

StatisticMenu.propTypes = {
  monthChanger: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  backMonthHandler: PropTypes.bool.isRequired,
  nextMonthHandler: PropTypes.bool.isRequired,
  balance: PropTypes.number.isRequired,
};

export default StatisticMenu;
