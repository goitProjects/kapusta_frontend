import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './DashboardMenu.module.css';
import { ReactComponent as Bar } from '../../assets/icons/bar.svg';
import ModalAddIncome from '../ModalAddIncome/ModalAddIncome';

import { setBalanceOpearation } from '../../redux/authUser/operations';

import { SetIsModalAddIncomeOpen } from '../../redux/global/operations';

export default function DashboardMenu() {
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const userNewValue = useSelector(
    state => state.session.user.userData.userNew,
  );
  useEffect(() => {
    // console.log('userNewValue', userNewValue);
  });
  const userBalance = useSelector(state => state.session.balance);
  const isModalAddIncome = useSelector(state => state.global.isModalAddIncome);

  const setBalanceFunc = data => dispatch(setBalanceOpearation(data));
  const openModalAddIncome = () => dispatch(SetIsModalAddIncomeOpen());

  const handleChangeAmount = e => setAmount(e.target.value);
  const handleChangeBalance = () => {
    setBalanceFunc(+amount);
    setAmount('');
  };

  return (
    <div className={css.wrapper}>
      {userNewValue ? (
        <>
          <form className={css.form}>
            <label htmlFor="balance" className={css.balance__title}>
              Баланс:
            </label>
            <div className={css.balance_display}>
              <input
                type="text"
                name="balance"
                value={amount}
                placeholder="00.00 грн"
                className={css.balance__input}
                onChange={handleChangeAmount}
                required
              />
              <button
                type="button"
                className={css.balance_button}
                onClick={() => {
                  handleChangeBalance();
                }}
              >
                OK
              </button>
            </div>
          </form>
          <div className={css.alarm}>
            <p className={css.alarmContent}>
              Привет! Для начала работы внеси текущий баланс своего счета!
            </p>
            <p className={css.alarmContent2}>
              Ты не можешь тратить деньги пока их у тебя нет :)
            </p>
          </div>
        </>
      ) : (
        <div className={css.form}>
          <p className={css.balance__title}>Баланс:</p>
          <div className={css.balance_display}>
            <p className={css.balance__value}>
              {userBalance.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'UAH',
              })}
            </p>
            <button
              type="button"
              className={css.balance_button}
              onClick={() => {
                openModalAddIncome();
              }}
            >
              Пополнить
            </button>
          </div>
          {isModalAddIncome && <ModalAddIncome />}
        </div>
      )}
      <Link className={css.statLink} to="/statistics">
        Перейти к отчетам
        <div className={css.barCont}>
          <Bar className={css.bar} />
        </div>
      </Link>
    </div>
  );
}
