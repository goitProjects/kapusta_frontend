import { getProductsFetch, createProductFetch } from '../../utils/requests';

import {
  productFetchStart,
  productsFetchSuccess,
  productsFetchError,
  productsFetchFinish,
  productCreateSuccess,
} from './action';

import { globalFetchStart, globalFetchFinish } from '../global/actions';

export const getProductsOperation = search => (dispatch, getStore) => {
  const {
    session: {
      user: { token },
    },
    products,
  } = getStore();

  if (products.data.length > 0) {
    return null;
  }

  dispatch(globalFetchStart());
  return getProductsFetch(search, token)
    .then(resp => {
      if (resp.status === 200) {
        const productsFromDB = resp.data.products;
        dispatch(productsFetchSuccess(productsFromDB));
      } else {
        throw resp;
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.response.data;
      }
      dispatch(productsFetchError(errData));
    })
    .finally(() => dispatch(globalFetchFinish()));
};

export const createProductsOperation = newProduct => (dispatch, getStore) => {
  const {
    session: {
      user: { token },
    },
  } = getStore();

  dispatch(productFetchStart());
  return createProductFetch(newProduct, token)
    .then(resp => {
      if (resp.status === 201) {
        const productsFromDB = resp.data.product;
        dispatch(productCreateSuccess(productsFromDB));
        return productsFromDB;
      }
      throw resp;
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.response.data;
      }
      dispatch(productsFetchError(errData));
    })
    .finally(() => dispatch(productsFetchFinish()));
};
