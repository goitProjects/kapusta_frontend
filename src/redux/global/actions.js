import types from '../types';

export const globalFetchStart = () => ({
  type: types.GLOBAL_FETCH_START,
});

export const globalFetchFinish = () => ({
  type: types.GLOBAL_FETCH_FINISH,
});

export const globalFetchError = payload => ({
  type: types.GLOBAL_ERROR,
  payload,
});

export const isModalLogoutOpen = () => ({
  type: types.IS_MODAL_LOGOUT_OPEN,
});

export const isModalLogoutClose = () => ({
  type: types.IS_MODAL_LOGOUT_CLOSE,
});

export const isModalDeleteOpen = () => ({
  type: types.IS_MODAL_DELETE_OPEN,
});

export const isModalDeleteClose = () => ({
  type: types.IS_MODAL_DELETE_CLOSE,
});

export const isModalAddIncomeOpen = () => ({
  type: types.IS_MODAL_ADD_INCOME_OPEN,
});

export const isModalAddIncomeClose = () => ({
  type: types.IS_MODAL_ADD_INCOME_CLOSE,
});
