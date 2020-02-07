import React from 'react';
import { useDispatch } from 'react-redux';
import { SetIsModalLogoutOpen } from '../../redux/global/operations';
import { ReactComponent as LogoutSvg } from '../../assets/icons/logout.svg';
import s from './UserLogout.module.css';

const UserLogout = () => {
  const dispatch = useDispatch();
  const openModalLogout = () => dispatch(SetIsModalLogoutOpen());

  return (
    <>
      <button
        type="button"
        onClick={() => openModalLogout()}
        className={s.logout_btn}
      >
        <LogoutSvg className={s.logoutSvg} />
        <p className={s.logoutP}>Выйти</p>
      </button>
    </>
  );
};

export default UserLogout;
