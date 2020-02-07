import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { SetIsModalLogoutClose } from '../../redux/global/operations';
import { logoutOperation } from '../../redux/authUser/operations';
import s from './LogoutModal.module.css';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(SetIsModalLogoutClose());
  const logoutFunc = () => dispatch(logoutOperation());

  return (
    <Modal onClose={closeModal}>
      <div className={s.modalWrapper}>
        <div className={s.modalContent}>
          <p className={s.modalLogout_p}>Вы действительно хотите выйти?</p>
          <div className={s.modalLogout_btn}>
            <button
              type="button"
              className={s.yes_no_btn_header}
              onClick={() => {
                logoutFunc();
                closeModal();
              }}
            >
              Да
            </button>
            <button
              type="button"
              className={s.yes_no_btn_header}
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

export default LogoutModal;
