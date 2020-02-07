import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { SetIsModalAddIncomeClose } from '../../redux/global/operations';
import DatePick from '../DatePick/DatePik';
import calc from '../../assets/images/icon_calculator.png';
import s from './ModalAddIncome.module.css';
import { incomeOperation } from '../../redux/transactions/operations';

const ModalAddIncome = () => {
  const [amount, setAmount] = useState(' ');
  const [date, setDate] = useState(new Date());

  // const products = useSelector(state => state.products.data);
  // const options = products.map(prod => ({
  //   label: prod.name,
  //   value: prod._id,
  // }));
  // const costId = options.find(item => item.label === inputValue.value);
  const dispatch = useDispatch();
  const addIncomeFunc = data => dispatch(incomeOperation(data));
  const closeModal = () => dispatch(SetIsModalAddIncomeClose());

  const handleOnClear = () => {
    setAmount('');
    setDate(new Date());
  };

  const handleSetIncome = () => {
    const newCost = {
      date: date.toISOString(),
      amount: Number(amount),
    };
    addIncomeFunc(newCost);

    handleOnClear();
  };

  const handleAmount = e => {
    const { value } = e.target;
    if (Number.isNaN(value)) {
      return;
    }
    if (Number(value) > 9999) {
      return;
    }

    setAmount(value);
  };

  return (
    <Modal onClose={closeModal}>
      <form className={s.modalWrapper}>
        <p className={s.modalDeleteCosts_p}>Введите доход</p>
        <div className={s.modalContent}>
          <div className={s.tav_div}>
            <DatePick date={date} setDate={setDate} />
          </div>
          <div className={s.select} />
          <div className={s.input_button_section}>
            <div className={s.test}>
              <input
                type="number"
                value={amount}
                onChange={handleAmount}
                className={s.tab_input_price}
                min="1"
                max="9999"
                placeholder=" "
              />
            </div>
            <button type="button" className={s.tab_input_price_button}>
              <img src={calc} alt="calc" />
            </button>
          </div>
        </div>
        <div className={s.modalDeleteCosts_btn}>
          <button
            type="button"
            className={s.yes_no_btn_delete_costs}
            onClick={() => {
              handleSetIncome();
              closeModal();
            }}
          >
            Ввод
          </button>
          <button
            type="button"
            onClick={() => {
              closeModal();
              handleOnClear();
            }}
            className={s.yes_no_btn_delete_costs}
          >
            Очистить
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAddIncome;
