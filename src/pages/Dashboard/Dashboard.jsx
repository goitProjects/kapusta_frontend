import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from '../../components/Main/Main';
import { getProductsOperation } from '../../redux/products/operations';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import DashboardPanel from '../../components/DashboardPanel/DashboardPanel';
// import styles from './Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = search => dispatch(getProductsOperation(search));
    getProducts();
  }, [dispatch]);

  return (
    <Main>
      <DashboardMenu />
      <DashboardPanel />
    </Main>
  );
};

export default Dashboard;
