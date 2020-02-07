import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';
import LogoIMG from '../../assets/images/kapusta_main_logo.png';
import LogoutModal from '../LogoutModal/LogoutModal';
import UserLogout from '../UserLogout/UserLogout';
import UserInfo from '../UserInfo/UserInfo';

const Header = () => {
  const isModalLogout = useSelector(state => state.global.isModalLogout);
  const isUserLogged = useSelector(state => state.session.isloged);
  return (
    <div className={s.header}>
      <Link to="/" alt="homepage" className={s.Logo_link}>
        <img src={LogoIMG} className={s.Logo_IMG} alt="Kapusta" />
      </Link>
      {isUserLogged && (
        <div className={s.user_logout_div}>
          <UserInfo />
          <UserLogout />
          {isModalLogout && <LogoutModal />}
        </div>
      )}
    </div>
  );
};

export default Header;
