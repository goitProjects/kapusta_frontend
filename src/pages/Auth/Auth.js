import React from 'react';
import AuthArticle from '../../components/AuthArticle/AuthArticle';
import AuthForm from '../../components/AuthForm/AuthForm';
import css from './Auth.module.css';

const Auth = () => {
  return (
    <div className={css.wrap}>
      <div className={css.wrapper}>
        <AuthArticle />
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
