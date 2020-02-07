import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { promisify } from 'util';
import Modal from '../Modal/Modal';

import {
  delCostsOperation,
  getTransactionsOperation,
} from '../../redux/transactions/operations';
import { SetIsModalDeleteClose } from '../../redux/global/operations';

import s from './DeleteCostsModal.module.css';

const DeleteCostsModal = () => {
  const dispatch = useDispatch();
  const promisifiedDispatch = promisify(dispatch);
  const transactionToDelete = useSelector(
    state => state.transactions.transactionToDelete,
  );
  const delCostsFunc = () =>
    promisifiedDispatch(delCostsOperation(transactionToDelete)).then(
      setTimeout(() => dispatch(getTransactionsOperation()), 500),
    );
  const closeModal = () => dispatch(SetIsModalDeleteClose());

  return (
    <Modal onClose={closeModal}>
      <div className={s.modalWrapper}>
        <div className={s.modalContent}>
          <p className={s.modalDeleteCosts_p}>Вы уверенны?</p>
          <div className={s.modalDeleteCosts_btn}>
            <button
              type="button"
              className={s.yes_no_btn_delete_costs}
              onClick={() => {
                delCostsFunc();
                closeModal();
              }}
            >
              Да
            </button>
            <button
              type="button"
              className={s.yes_no_btn_delete_costs}
              onClick={() => closeModal()}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCostsModal;
