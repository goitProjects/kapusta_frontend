import types from '../types';

const initialState = {
  isloged: false,
  isLoading: false,
  balance: 0,
  user: null,
  error: null,
};

const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGOUT_START:
      return { ...state, isLoading: true };
    case types.AUTH_FETCH_FINISH:
      return { ...state, isLoading: false };
    case types.AUTH_FETCH_ERROR:
      return { ...state, error: payload };
    case types.AUTH_FETCH_SUCCESS:
      return { ...state, user: payload };

    case types.BALANCE_FETCH_ERROR:
      return { ...state, error: payload };
    case types.BALANCE_FETCH_SUCCESS: {
      return {
        ...state,
        balance: payload,
        user: {
          ...state.user,
          userData: { ...state.user.userData, userNew: false },
        },
      };
    }

    case types.LOGED_TRUE:
      return { ...state, isloged: true };
    case types.LOGED_FALSE:
      return { ...state, isloged: false };

    case types.LOGOUT_SUCCESS:
      return { ...initialState };
    case types.LOGOUT_ERROR:
      return { ...state, isLoading: false };

    // Регистрация
    case types.REGISTER_START:
      return { ...state, error: null, isLoading: true };
    case types.REGISTER_SUCCESS:
      return {
        isloged: true,
        isLoading: false,
        balance: payload.balance,
        user: payload.user,
        error: null,
      };
    case types.REGISTER_ERROR:
      return {
        isloged: false,
        isLoading: false,
        balance: 0,
        user: null,
        error: payload,
      };

    case types.LOGIN_START:
      return { ...state, error: null, isLoading: true };
    case types.LOGIN_SUCCESS:
      return {
        isloged: true,
        isLoading: false,
        balance: payload.balance,
        user: payload.user,
        error: null,
      };
    case types.LOGIN_ERROR:
      return {
        isloged: false,
        isLoading: false,
        balance: 0,
        user: null,
        error: payload,
      };

    case types.COSTS_FETCH_SUCCESS:
      return {
        ...state,
        balance: payload.balance,
      };

    case types.INCOME_FETCH_SUCCESS:
      return {
        ...state,
        balance: payload.balance,
      };

    default:
      return state;
  }
};

export default sessionReducer;
