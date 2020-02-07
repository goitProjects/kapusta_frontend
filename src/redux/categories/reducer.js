import types from '../types';

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CATEGORIES_FETCH_START:
      return { ...state, isLoading: true };
    case types.CATEGORIES_FETCH_FINISH:
      return { ...state, isLoading: false };
    case types.CATEGORIES_FETCH_ERROR:
      return { ...state, error: payload };
    case types.CATEGORIES_FETCH_SUCCESS:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default categoriesReducer;
