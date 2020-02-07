import types from '../types';

const initialState = {
  isLoading: false,
  error: false,
  costs: [],
  income: [],
  transactionToDelete: {},
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TRANSACTIONS_FETCH_START:
      return { ...state, isLoading: true };
    case types.TRANSACTIONS_FETCH_FINISH:
      return { ...state, isLoading: false };
    case types.TRANSACTIONS_FETCH_ERROR:
      return { ...state, error: payload };
    case types.TRANSACTIONS_FETCH_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case types.TRANSACTIONS_SET_TO_DELETE:
      return { ...state, transactionToDelete: payload };

    case types.IS_MODAL_DELETE_CLOSE:
      return {
        ...state,
        transactionToDelete: {},
      };

    case types.TRANSACTIONS_RESET:
      return { ...initialState };

    case types.COSTS_FETCH_ERROR:
      return { ...state, error: payload };
    case types.COSTS_FETCH_SUCCESS:
      return { ...state, costs: [...state.costs, payload.createdCosts] };
    case types.COSTS_DEL_ERROR:
      return { ...state, error: payload, transactionToDelete: {} };
    case types.COSTS_DEL_SUCCESS:
      return { ...state, transactionToDelete: {} };

    case types.INCOME_FETCH_SUCCESS:
      return { ...state, income: [...state.income, payload.income] };
    case types.INCOME_FETCH_ERROR:
      return { ...state, income: [...state.income, payload.income] };
    default:
      return state;
  }
};

export default productsReducer;
