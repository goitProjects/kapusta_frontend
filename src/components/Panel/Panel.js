import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.scss';

const Panel = ({ children }) => {
  return <div className={styles.panel}>{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.node,
  ]).isRequired,
};

export default Panel;
