import types from '../types';

const initialState = {
  isLoading: false,
  error: false,
  isModalLogout: false,
  isModalDelete: false,
  isModalAddIncome: false,
};

const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GLOBAL_FETCH_START:
      return { ...state, isLoading: true };
    case types.GLOBAL_FETCH_FINISH:
      return { ...state, isLoading: false };
    case types.GLOBAL_FETCH_ERROR:
      return { ...state, error: payload };
    case types.IS_MODAL_LOGOUT_OPEN:
      return { ...state, isModalLogout: true };
    case types.IS_MODAL_LOGOUT_CLOSE:
      return { ...state, isModalLogout: false };
    case types.IS_MODAL_DELETE_OPEN:
      return { ...state, isModalDelete: true };
    case types.IS_MODAL_DELETE_CLOSE:
      return { ...state, isModalDelete: false };
    case types.IS_MODAL_ADD_INCOME_OPEN:
      return { ...state, isModalAddIncome: true };
    case types.IS_MODAL_ADD_INCOME_CLOSE:
      return { ...state, isModalAddIncome: false };

    default:
      return state;
  }
};

export default globalReducer;
