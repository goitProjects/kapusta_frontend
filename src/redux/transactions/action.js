import types from '../types';

export const transactionsFetchStart = () => ({
  type: types.TRANSACTIONS_FETCH_START,
});

export const transactionsFetchFinish = () => ({
  type: types.TRANSACTIONS_FETCH_FINISH,
});

export const transactionsFetchError = payload => ({
  type: types.TRANSACTIONS_FETCH_ERROR,
  payload,
});

export const transactionsFetchSuccess = payload => ({
  type: types.TRANSACTIONS_FETCH_SUCCESS,
  payload,
});

export const transactionsSetToDelete = payload => ({
  type: types.TRANSACTIONS_SET_TO_DELETE,
  payload,
});

export const transactionsReset = () => ({ type: types.TRANSACTIONS_RESET });

export const setCostsFetchError = payload => ({
  type: types.COSTS_FETCH_ERROR,
  payload,
});

export const setCostsFetchSuccess = payload => ({
  type: types.COSTS_FETCH_SUCCESS,
  payload,
});

export const delCostsError = payload => ({
  type: types.IS_MODAL_DELETE_CLOSE,
  payload,
});

export const delCostsSuccess = () => ({
  type: types.COSTS_DEL_SUCCESS,
});
export const delCostsReset = () => ({ type: types.COSTS_DEL_RESET });

export const setIncomeFetchSucces = payload => ({
  type: types.INCOME_FETCH_SUCCESS,
  payload,
});

export const setIncomeFetchError = payload => ({
  type: types.INCOME_FETCH_ERROR,
  payload,
});
