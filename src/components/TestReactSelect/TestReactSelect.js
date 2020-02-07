import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import Modal from './Modal/Modal';
import { useWindowSize } from '../../utils/hooks';
import s from './Modal/Modal.module.css';

const TestReactSelect = ({ value, setValue }) => {
  const products = useSelector(state => state.products.data);
  const [newProduct, setNewProduct] = useState('');
  const [isModal, setIsModal] = useState(false);

  const handleOnChange = e => {
    setValue(e);
  };

  const handleOnCreate = productFromInput => {
    setNewProduct(productFromInput);
    setIsModal(true);
  };

  const options = products
    .map(prod => ({
      label: `${prod.name} -> ${prod.category.name}`,
      value: prod._id,
    }))
    .sort((currProd, nextProd) => {
      if (currProd.label < nextProd.label) {
        return -1;
      }
      if (currProd.label > nextProd.label) {
        return 1;
      }
      return 0;
    });

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'blue' : '',
      fontSize: 14,
      backgroundColor: state.isSelected ? '#eee' : '',
      textAlign: 'justify',
      textJustify: 'inter-word',
      cursor: 'pointer',
      outline: 'none',
    }),
    container: base => ({
      ...base,
      width: '250px',
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
      textAlign: 'justify',
      textJustify: 'inter-word',
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
      fontSize: 14,
      backgroundColor: state.isSelected ? '#eee' : '',
      textAlign: 'justify',
      textJustify: 'inter-word',
      cursor: 'pointer',
      outline: 'none',
    }),
    container: base => ({
      ...base,
      width: '380px',
      // width: '100%',
      // width: '400px',
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
      textAlign: 'justify',
      textJustify: 'inter-word',
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
      <CreatableSelect
        options={options}
        placeholder="Здесь ты будешь вносить то, на что ты тратишь деньги"
        isSearchable
        styles={width > 767 ? selectStyles760 : selectStyles}
        value={value}
        className={s.mo}
        onChange={handleOnChange}
        onCreateOption={handleOnCreate}
        formatCreateLabel={userInput => `Создать "${userInput}"`}
      />
      {isModal && (
        <Modal
          onClose={() => setIsModal(false)}
          value={newProduct}
          setValue={setValue}
        />
      )}
    </div>
  );
};

TestReactSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ]).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TestReactSelect;
