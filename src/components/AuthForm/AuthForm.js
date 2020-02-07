import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notifications from 'react-notify-toast';
import css from './AuthForm.module.css';
import logo from '../../assets/images/logo_google.png';
import url from '../../utils/entryPoints';
import {
  registerOperation,
  loginOperation,
} from '../../redux/authUser/operations';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hahdleChangeEmail = e => setEmail(e.target.value);
  const hahdleChangePassword = e => setPassword(e.target.value);
  const dispatch = useDispatch();
  const registerFunc = data => dispatch(registerOperation(data));
  const loginFunc = data => dispatch(loginOperation(data));

  const handleClickRegisterButton = () => {
    registerFunc({ email, password, name: {} });
    setEmail('');
    setPassword('');
  };
  const handleClickLoginButton = () => {
    loginFunc({ email, password, name: {} });
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} autoComplete="off">
        <p className={css.form_titleG}>
          Вы можете авторизироваться с помощью google account:
        </p>
        <a className={css.form_googleLink} href={url.authGoogle()}>
          <img className={css.form_googleLogo} src={logo} alt="logo_google" />
          Google
        </a>
        <p className={css.form_title}>
          Или зайти в приложение с помощью имейла и пароля, сперва
          зарегестрировавшись:
        </p>
        <div className={css.form_inputArea}>
          <label htmlFor="email" className={css.form_inputDescription}>
            Электронная почта
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={hahdleChangeEmail}
            required
            className={css.form_input}
            placeholder="Your@email.com"
          />
          <label htmlFor="pass" className={css.form_inputDescription}>
            Пароль
          </label>
          <input
            id="pass"
            name="pass"
            type="password"
            value={password}
            onChange={hahdleChangePassword}
            required
            className={css.form_input}
            placeholder="Пароль"
          />
          <div className={css.form_buttons}>
            <button
              onClick={handleClickLoginButton}
              type="button"
              className={css.form_button}
            >
              войти
            </button>
            <button
              onClick={handleClickRegisterButton}
              type="button"
              className={css.form_button}
            >
              регистрация
            </button>
          </div>
        </div>
      </form>
      <Notifications />
    </div>
  );
}
