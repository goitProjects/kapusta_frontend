import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Delete } from '../../assets/icons/index';
import st from './ButtonDelete.module.css';
import { setTransactionToDelete } from '../../redux/transactions/operations';
import { SetIsModalDeleteOpen } from '../../redux/global/operations';

function ButtonDelete(props) {
  const { transactionID } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTransactionToDelete(transactionID));
    dispatch(SetIsModalDeleteOpen());
  };

  return (
    <button className={st.DeleteButton} type="button" onClick={handleClick}>
      <Delete />
    </button>
  );
}

ButtonDelete.propTypes = {
  transactionID: PropTypes.string.isRequired,
};

export default ButtonDelete;
