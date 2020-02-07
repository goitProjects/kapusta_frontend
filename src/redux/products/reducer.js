import types from '../types';

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCTS_FETCH_START:
      return { ...state, isLoading: true };
    case types.PRODUCTS_FETCH_FINISH:
      return { ...state, isLoading: false };
    case types.PRODUCTS_FETCH_ERROR:
      return { ...state, error: payload };
    case types.PRODUCTS_FETCH_SUCCESS:
      return { ...state, data: payload };
    case types.PRODUCTS_CREATE_SUCCESS:
      return { ...state, data: [...state.data, payload] };
    default:
      return state;
  }
};

export default productsReducer;
