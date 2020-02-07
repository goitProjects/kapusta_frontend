import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { getCategoriesOperation } from '../../../redux/categories/operations';
import { createProductsOperation } from '../../../redux/products/operations';
import Modal from '../../Modal/Modal';
import Panel from '../../Panel/Panel';
import style from './Modal.module.css';

const CreateProduct = ({ onClose, value, setValue }) => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  const categories = useSelector(state => state.categories.data);

  const options = categories.map(cat => ({ label: cat.name, value: cat._id }));

  useEffect(() => {
    const getCategories = () => dispatch(getCategoriesOperation());
    getCategories();
  }, [dispatch]);

  const handleOnChange = option => {
    setCategory(option);
  };

  const handleOnCreate = () => {
    const data = {
      name: value,
      category: category.value,
    };

    const createProduct = newProduct =>
      dispatch(createProductsOperation(newProduct));

    createProduct(data)
      .then(productsFromDB => {
        const newValue = {
          label: productsFromDB.name,
          value: productsFromDB._id,
        };
        setValue(newValue);
      })
      .then(() => onClose());
  };

  return (
    <Modal onClose={onClose}>
      <div className={style.panelWrapper}>
        <Panel>
          <div className={style.wrapper}>
            <h3>К какой категории относиться {value} ?</h3>
            <Select
              value={category}
              options={options}
              onChange={handleOnChange}
              autoFocus
            />
            <div>
              <button type="button" onClick={onClose}>
                Отмена
              </button>
              <button
                type="button"
                disabled={!category}
                onClick={handleOnCreate}
              >
                Создать
              </button>
            </div>
          </div>
        </Panel>
      </div>
    </Modal>
  );
};

CreateProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
export default CreateProduct;
