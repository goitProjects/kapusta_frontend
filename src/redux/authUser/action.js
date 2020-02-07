import types from '../types';

export const authFetchStart = () => ({
  type: types.AUTH_FETCH_START,
});
export const authFetchFinish = () => ({
  type: types.AUTH_FETCH_FINISH,
});
export const authFetchError = payload => ({
  type: types.AUTH_FETCH_ERROR,
  payload,
});
export const authFetchSuccess = payload => ({
  type: types.AUTH_FETCH_SUCCESS,
  payload,
});

export const userNew = () => ({ type: types.USER_NEW });
export const balanceFetchError = payload => ({
  type: types.BALANCE_FETCH_ERROR,
  payload,
});
export const balanceFetchSuccess = payload => ({
  type: types.BALANCE_FETCH_SUCCESS,
  payload,
});

export const logedTrue = () => ({
  type: types.LOGED_TRUE,
});
export const logedFalse = () => ({
  type: types.LOGED_FALSE,
});

export const logoutStart = () => ({
  type: types.LOGOUT_START,
});
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
export const logoutError = () => ({
  type: types.LOGOUT_ERROR,
});

export const registerStart = () => ({
  type: types.REGISTER_START,
});
export const registerSuccess = data => ({
  type: types.REGISTER_SUCCESS,
  payload: data,
});
export const registerError = error => ({
  type: types.REGISTER_ERROR,
  payload: error,
});

export const loginStart = () => ({
  type: types.LOGIN_START,
});
export const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});
export const loginError = error => ({
  type: types.LOGIN_ERROR,
  payload: error,
});
