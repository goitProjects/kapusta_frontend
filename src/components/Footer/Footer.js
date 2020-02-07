import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CabbageContactSvg } from '../../assets/icons/cabbage_contact.svg';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer_div}>
      <Link to="/contacts" className={s.contactsLink}>
        <p className={s.Hover_P_Contact}>Контакты</p>
        <CabbageContactSvg className={s.cabbageContactSvg} />
      </Link>
    </div>
  );
};

export default Footer;
