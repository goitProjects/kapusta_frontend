import axios from 'axios';
import api from './entryPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Auth
export const authRegister = data => axios.post(api.register(), data);
export const authLogin = data => axios.post(api.login(), data);

export const getUser = token => {
  const options = {
    method: 'get',
    url: api.user(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(options);
};

export const logoutUser = token =>
  axios.post(api.logout(), null, setToken(token));

// Balance
export const createBalanceFetch = (data, token) =>
  axios.post(api.balance(), { amount: data }, setToken(token));

// Product
export const getProductsFetch = (search, token) => {
  const option = {
    method: 'GET',
    url: api.products(search),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(option);
};

export const createProductFetch = (newProduct, token) =>
  axios.post(api.products(), newProduct, setToken(token));

// Categories
export const getCategoryFetch = token =>
  axios.get(api.categories(), setToken(token));

// Costs
export const setCostsFetch = (data, token) =>
  axios.post(api.costs(), data, setToken(token));
export const delCosts = (data, token) =>
  axios.delete(api.costs(data), setToken(token));

// Income
export const setIncomeFetch = (data, token) =>
  axios.post(api.income(), data, setToken(token));

// Transactions
export const getTransactionsFetch = token =>
  axios.get(api.transactions(), setToken(token));
