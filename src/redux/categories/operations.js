import { getCategoryFetch } from '../../utils/requests';

import {
  categoriesFetchStart,
  categoriesFetchError,
  categoriesFetchFinish,
  categoriesFetchSuccess,
} from './action';

export const getCategoriesOperation = () => (dispatch, getStore) => {
  const {
    session: {
      user: { token },
    },
    categories,
  } = getStore();

  if (categories.data.length > 0) {
    return null;
  }

  dispatch(categoriesFetchStart());
  return getCategoryFetch(token)
    .then(resp => {
      if (resp.status === 200) {
        const categoriesFromDB = resp.data.categories;
        dispatch(categoriesFetchSuccess(categoriesFromDB));
      } else {
        throw resp;
      }
    })
    .catch(err => {
      const errData = err;
      // if (err instanceof Error) {
      //   errData = err.response.data;
      // }
      dispatch(categoriesFetchError(errData));
    })
    .finally(() => dispatch(categoriesFetchFinish()));
};

export const TEST = () => ({});
