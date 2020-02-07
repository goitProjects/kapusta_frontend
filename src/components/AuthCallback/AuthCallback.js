import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getUserOperation } from '../../redux/authUser/operations';

const AuthCallback = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  function useQuery() {
    return new URLSearchParams(history.location.search);
  }

  const token = useQuery().get('token');

  if (token) {
    localStorage.setItem('userToken', token);

    const getUser = token2 => dispatch(getUserOperation(token2));

    getUser(token);
  }

  return <>{token ? history.push('/dashboard') : history.push('/')}</>;
};

export default AuthCallback;
