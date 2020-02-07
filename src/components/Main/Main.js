import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
// import { useWindowSize } from '../../utils/hooks';

const Main = ({ children }) => {
  // const { width } = useWindowSize();
  const location = useLocation();

  const isStatisticsPage = location.pathname.split('/')[1] === 'statistics';

  const classes = isStatisticsPage
    ? styles.statisticsWrapper
    : styles.dashboardWrapper;

  return (
    <main className={styles.main}>
      <div className={styles.dicoration} />
      <div className={classes}>{children}</div>
      {/* {width >= 1280 && <i className={styles.cabbages} />} */}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

// desktop 942
// tablet 688
