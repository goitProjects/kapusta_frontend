export const getBalance = store => store.session.balance;

export const getCreatedDate = store =>
  store.session.user ? store.session.user.userData.createdAt : null;

export const getCosts = store => store.transactions.costs;

export const getCategoriesSelector = store => store.categories.data;

export const getIncomes = store => store.transactions.income;
