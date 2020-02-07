import { notify } from 'react-notify-toast';
import {
  getUser,
  createBalanceFetch,
  logoutUser,
  authRegister,
  authLogin,
} from '../../utils/requests';

import {
  authFetchSuccess,
  authFetchError,
  logedTrue,
  balanceFetchSuccess,
  balanceFetchError,
  logoutStart,
  logoutSuccess,
  logoutError,
  registerStart,
  registerSuccess,
  registerError,
  loginStart,
  loginSuccess,
  loginError,
} from './action';

import { globalFetchStart, globalFetchFinish } from '../global/actions';
import { transactionsReset } from '../transactions/action';

export const getUserOperation = token => dispatch => {
  dispatch(globalFetchStart());

  return getUser(token)
    .then(resp => {
      if (resp.status === 200) {
        const { user, balance } = resp.data;
        dispatch(authFetchSuccess(user));
        dispatch(balanceFetchSuccess(balance));
        dispatch(logedTrue());
      } else {
        throw resp;
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.response.data;
      }
      localStorage.removeItem('userToken');
      dispatch(authFetchError(errData));
    })
    .finally(() => {
      dispatch(globalFetchFinish());
    });
};

export const setBalanceOpearation = data => (dispatch, getState) => {
  const {
    session: {
      user: { token },
    },
  } = getState();

  createBalanceFetch(data, token)
    .then(resp => {
      if (resp.status === 201) {
        const { balance } = resp.data;
        dispatch(balanceFetchSuccess(balance));
      } else {
        throw resp;
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.response.data;
      }
      dispatch(balanceFetchError(errData));
    });
};

export const logoutOperation = () => (dispatch, getState) => {
  dispatch(logoutStart());

  const {
    session: {
      user: { token },
    },
  } = getState();

  logoutUser(token)
    .then(() => {
      dispatch(logoutSuccess());
      dispatch(transactionsReset());
    })
    .then(() => localStorage.removeItem('userToken'))
    .catch(() => {
      dispatch(logoutError());
    });
};

export const registerOperation = userData => dispatch => {
  dispatch(registerStart());

  authRegister(userData)
    .then(res => {
      let errData = res;
      if (res.data.status === 'error') {
        errData = res.response.data;
      }
      dispatch(registerError(errData));
      dispatch(registerSuccess(res.data));
      localStorage.setItem('userToken', res.data.user.token);
      dispatch(logedTrue());
    })
    .catch(err => {
      const errData = err;
      notify.show('Упс... =( проверьте введенные данные еще раз', 'error');
      dispatch(registerError(errData));
    });
};

export const loginOperation = userData => dispatch => {
  dispatch(loginStart());

  authLogin(userData)
    .then(res => {
      localStorage.setItem('userToken', res.data.user.token);
      dispatch(loginSuccess(res.data));
      dispatch(logedTrue());
    })
    .catch(error => {
      notify.show(
        'Упс... =( возможно Вы ввели не верную почту или пароль',
        'error',
      );
      dispatch(loginError(error));
    });
};
