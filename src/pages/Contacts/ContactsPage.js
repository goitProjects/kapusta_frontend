import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Main from '../../components/Main/Main';
import { ReactComponent as Arrow } from '../../assets/icons/left-arrow.svg';
import ContactUs from '../../components/ContactUs/ContactUs';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const history = useHistory();
  const location = useLocation();
  // console.log('location', location);

  const isContacts = location.pathname.split('/')[1] === 'contacts';

  const handleClickBack = () => {
    history.push('/');
  };

  return (
    <Main>
      <div className={s.contacts_div_main}>
        {isContacts && (
          <button
            className={s.arrowBtn}
            type="button"
            onClick={handleClickBack}
          >
            <Arrow className={s.arrowSvg} />
            <p className={s.backText}>На главную</p>
          </button>
        )}
        <ContactUs />
      </div>
    </Main>
  );
};

export default ContactsPage;
