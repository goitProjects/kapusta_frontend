import {
  getTransactionsFetch,
  setCostsFetch,
  delCosts,
  setIncomeFetch,
} from '../../utils/requests';

import {
  transactionsFetchStart,
  transactionsFetchSuccess,
  transactionsFetchError,
  transactionsFetchFinish,
  transactionsSetToDelete,
  setCostsFetchError,
  setCostsFetchSuccess,
  delCostsError,
  delCostsSuccess,
  setIncomeFetchSucces,
  setIncomeFetchError,
} from './action';

import { balanceFetchSuccess } from '../authUser/action';

export const getTransactionsOperation = () => (dispatch, getStore) => {
  const {
    session: {
      user: { token },
    },
  } = getStore();

  dispatch(transactionsFetchStart());
  return getTransactionsFetch(token)
    .then(res => {
      if (res.data.status === 'success') {
        const transactions = {
          costs: res.data.costs,
          income: res.data.income,
        };
        dispatch(transactionsFetchSuccess(transactions));
        dispatch(balanceFetchSuccess(res.data.balance));
      } else {
        throw new Error(res);
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.res;
      }
      dispatch(transactionsFetchError(errData));
    })
    .finally(() => dispatch(transactionsFetchFinish()));
};

export const costsOperation = data => (dispatch, getState) => {
  const {
    session: {
      user: { token },
    },
  } = getState();

  setCostsFetch(data, token)
    .then(res => {
      dispatch(setCostsFetchSuccess(res.data));
    })
    .catch(() => dispatch(setCostsFetchError()));
};

export const delCostsOperation = data => (dispatch, getState) => {
  const {
    session: {
      user: { token },
    },
  } = getState();

  if (!data.costsId) return;

  delCosts(`${data.forDeleteId}/${data.costsId}`, token)
    .then(() => dispatch(delCostsSuccess()))
    .catch(() => dispatch(delCostsError()));
};

export const incomeOperation = data => (dispatch, getState) => {
  const {
    session: {
      user: { token },
    },
  } = getState();

  setIncomeFetch(data, token)
    .then(res => dispatch(setIncomeFetchSucces(res.data)))
    .catch(() => dispatch(setIncomeFetchError()));
};

export const t = () => {};

export const setTransactionToDelete = transactionID => (dispatch, getStore) => {
  const {
    transactions: { costs },
  } = getStore();

  const transactionToDelete = costs.find(
    cost => cost.costsId === transactionID,
  );

  dispatch(transactionsSetToDelete(transactionToDelete));
  return transactionToDelete;
};
