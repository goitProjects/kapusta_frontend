import React from 'react';
import Select from 'react-select';
import s from './AddExpense.module.css';
import calc from '../../assets/images/icon_calculator.png';
import DatePic from '../DatePick/DatePik';
import { useWindowSize } from '../../utils/hooks';

const options = [
  { value: 'продукты', label: 'Продукты' },
  { value: 'алкоголь', label: 'Алкоголь' },
  { value: 'траниспорт', label: 'Транспорт' },
];

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
    maxWidth: '380px',
    width: '100%',
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

const AddExpense = () => {
  const { width } = useWindowSize();
  return (
    <div className={s.tab_input_container}>
      <div className={s.tab_select_input_section}>
        <div className={s.tav_div}>
          {/* <p className={s.tab_line}>21.11.2019</p> */}
          <DatePic />
        </div>
        <Select
          options={options}
          styles={width > 767 ? selectStyles760 : selectStyles}
          placeholder="Здесь ты будешь вносить то, на что ты тратишь деньги"
        />

        <div className={s.input_button_section}>
          <div className={s.test}>
            <input
              className={s.tab_input_price}
              type="number"
              max="1000"
              min="1"
              placeholder="00.00"
              pattern="\d+(.\d{2})?"
            />
          </div>
          <button type="button" className={s.tab_input_price_button}>
            <img src={calc} alt="calc" />
          </button>
        </div>
      </div>
      <div className={s.forms}>
        <button type="submit" className={s.button_submit}>
          ВВОД
        </button>
        <button type="button" className={s.button_clean}>
          ОЧИСТИТЬ
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
