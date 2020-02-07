import {
  globalFetchStart,
  globalFetchFinish,
  isModalLogoutOpen,
  isModalLogoutClose,
  isModalDeleteOpen,
  isModalDeleteClose,
  isModalAddIncomeOpen,
  isModalAddIncomeClose,
} from './actions';

export const SetGloabalIsLoadingTrue = () => dispatch => {
  dispatch(globalFetchStart());
};

export const SetGloabalIsLoadingFalse = () => dispatch => {
  dispatch(globalFetchFinish());
};

export const SetIsModalLogoutOpen = () => dispatch => {
  dispatch(isModalLogoutOpen());
};

export const SetIsModalLogoutClose = () => dispatch => {
  dispatch(isModalLogoutClose());
};

export const SetIsModalDeleteOpen = () => dispatch => {
  dispatch(isModalDeleteOpen());
};

export const SetIsModalDeleteClose = () => dispatch => {
  dispatch(isModalDeleteClose());
};
export const SetIsModalAddIncomeOpen = () => dispatch => {
  dispatch(isModalAddIncomeOpen());
};

export const SetIsModalAddIncomeClose = () => dispatch => {
  dispatch(isModalAddIncomeClose());
};
