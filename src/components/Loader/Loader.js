import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const LoadingElement = () => {
  return (
    <div className={s.loader_div}>
      <Loader
        type="Circles"
        color="#ff7e31"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoadingElement;
