import React from 'react';
import css from './AuthArticle.module.css';

export default function AuthArticle() {
  return (
    <div className={css.article}>
      <h2 className={css.article__title}>Kapu$ta</h2>
      <p className={css.article__text}>Smart finance</p>
    </div>
  );
}
