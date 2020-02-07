import types from '../types';

export const categoriesFetchStart = () => ({
  type: types.CATEGORIES_FETCH_START,
});

export const categoriesFetchFinish = () => ({
  type: types.CATEGORIES_FETCH_FINISH,
});

export const categoriesFetchError = payload => ({
  type: types.CATEGORIES_FETCH_ERROR,
  payload,
});

export const categoriesFetchSuccess = payload => ({
  type: types.CATEGORIES_FETCH_SUCCESS,
  payload,
});
