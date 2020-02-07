import types from '../types';

export const productFetchStart = () => ({
  type: types.PRODUCTS_FETCH_START,
});

export const productsFetchFinish = () => ({
  type: types.PRODUCTS_FETCH_FINISH,
});

export const productsFetchError = payload => ({
  type: types.PRODUCTS_FETCH_ERROR,
  payload,
});

export const productsFetchSuccess = payload => ({
  type: types.PRODUCTS_FETCH_SUCCESS,
  payload,
});

export const productCreateSuccess = payload => ({
  type: types.PRODUCTS_CREATE_SUCCESS,
  payload,
});
