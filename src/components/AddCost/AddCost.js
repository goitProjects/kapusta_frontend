import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { promisify } from 'util';
import TestReactSelect from '../TestReactSelect/TestReactSelect';
import DatePick from '../DatePick/DatePik';
import calc from '../../assets/images/icon_calculator.png';
import s from './AddCost.module.css';
import { useWindowSize } from '../../utils/hooks';
import {
  costsOperation,
  getTransactionsOperation,
} from '../../redux/transactions/operations';

const AddCost = ({ setIsAddModal }) => {
  const [inputValue, setInputValue] = useState('');
  const [closeModal, setCloseModal] = useState(true);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const promisifiedDispatch = promisify(dispatch);
  const addCostFunc = data => {
    promisifiedDispatch(costsOperation(data)).then(
      setTimeout(() => dispatch(getTransactionsOperation()), 500),
    );
  };

  const handleOnClear = () => {
    setInputValue('');
    setAmount('');
    setDate(new Date());
  };

  const handleSetCosts = () => {
    const newCost = {
      date: date.toISOString(),
      product: {
        productId: inputValue.value,
        amount: Number(amount),
        date: date.toISOString(),
      },
    };
    addCostFunc(newCost);
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

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'blue' : '',
      fontSize: 16,
      backgroundColor: state.isSelected ? '#eee' : '',
      textAlign: 'left',
      cursor: 'pointer',
      outline: 'none',
    }),
    container: base => ({
      ...base,
      width: '380px',
      marginBottom: '29px',
      padding: '0 16px',
      outline: 'none',
    }),
    control: base => ({
      ...base,
      height: 20,
      minHeight: 90,
      fontSize: 13,
      borderRadius: '30px 30px 30px 0px',
      border: '3px solid #ffffff',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      backgroundColor: '#f4f6fb',
      paddingLeft: '10px',
      paddingRight: '10px',
      outline: 'none',
    }),
    dropdownIndicator: base => ({
      ...base,
      display: 'none',
      outline: 'none',
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none',
      outline: 'none',
    }),
    valueContainer: base => ({
      ...base,
      padding: 5,
      paddingLeft: 2,
      outline: 'none',
    }),
  };

  const selectStyles760 = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'blue' : '',
      fontSize: 16,
      backgroundColor: state.isSelected ? '#eee' : '',
      textAlign: 'left',
      cursor: 'pointer',
      outline: 'none',
    }),
    container: base => ({
      ...base,
      maxWidth: '380px',
      width: '100%',
      marginBottom: '29px',
      outline: 'none',
    }),
    control: base => ({
      ...base,
      height: 20,
      minHeight: 45,
      fontSize: 13,
      borderRadius: '30px 0px 0px 0px',
      borderLeft: '0px',
      border: '3px solid #f4f6fb',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      backgroundColor: '#fffff',
      paddingLeft: '10px',
      paddingRight: '10px',
      outline: 'none',
    }),
    dropdownIndicator: base => ({
      ...base,
      display: 'none',
      outline: 'none',
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none',
      outline: 'none',
    }),
    valueContainer: base => ({
      ...base,
      padding: 5,
      paddingLeft: 2,
      outline: 'none',
    }),
  };

  const { width } = useWindowSize();

  return (
    <div>
      {closeModal && (
        <>
          <form className={s.tab_input_container}>
            <div className={s.tab_select_input_section}>
              <div className={s.tav_div}>
                <DatePick date={date} setDate={setDate} />
              </div>
              <div className={s.select}>
                <TestReactSelect
                  styles={width > 767 ? selectStyles760 : selectStyles}
                  placeholder="Здесь ты будешь вносить то, на что ты тратишь деньги"
                  value={inputValue}
                  setValue={setInputValue}
                />
              </div>
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
            <div className={s.forms}>
              {width < 767 ? (
                <>
                  <button
                    type="button"
                    className={s.button_submit}
                    onClick={() => {
                      handleSetCosts();
                      setCloseModal(prev => !prev);
                      setIsAddModal(prev => !prev);
                    }}
                    disabled={!inputValue}
                  >
                    Ввод
                  </button>
                  <button
                    type="button"
                    onClick={handleOnClear}
                    className={s.button_clean}
                  >
                    Очистить
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className={s.button_submit}
                    onClick={() => {
                      handleSetCosts();
                    }}
                    disabled={!inputValue}
                  >
                    Ввод
                  </button>
                  <button
                    type="button"
                    onClick={handleOnClear}
                    className={s.button_clean}
                  >
                    Очистить
                  </button>
                </>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

AddCost.defaultProps = {
  setIsAddModal: () => null,
};

AddCost.propTypes = {
  setIsAddModal: PropTypes.func,
};

export default AddCost;
