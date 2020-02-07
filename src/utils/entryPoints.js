const baseUrl = 'https://smart-finance.goit.co.ua/api/v1';

const url = {
  register: () => `${baseUrl}/auth/register`,
  login: () => `${baseUrl}/auth/login`,
  categories: id =>
    id ? `${baseUrl}/categories/${id}` : `${baseUrl}/categories`,
  income: () => `${baseUrl}/income`,
  authGoogle: () => `${baseUrl}/auth/google`,
  costs: id => (id ? `${baseUrl}/costs/${id}` : `${baseUrl}/costs`),
  products: search =>
    search ? `${baseUrl}/products?name=${search}` : `${baseUrl}/products`,
  user: () => `${baseUrl}/user`,
  balance: () => `${baseUrl}/balance`,
  logout: () => `${baseUrl}/auth/logout`,
  transactions: () => `${baseUrl}/transactions`,
};

export default url;
