import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoriesList.module.css';
import Panel from '../Panel/Panel';
import sprite from '../../assets/icons/sprite_categories.svg';
import catList from './categoriesName';

const getCurrentName = name => {
  return catList.find(el => {
    return el.title === name;
  });
};

const CategoriesList = ({
  categories,
  categoryChange,
  stashCategory,
  categNotSelected,
  selectedCategory,
}) => {
  return (
    <>
      <Panel>
        <ul className={styles.menuCategotyList}>
          {categories.map(category => (
            <li
              name={category.category}
              key={category.id}
              className={styles.menuCategoryItem}
            >
              <p name={category.category} className={styles.itemAmount}>
                {category.amount}
              </p>
              <button
                type="button"
                name={category.category}
                onClick={categoryChange}
                className={
                  selectedCategory === category.category
                    ? styles.itemIsActiveBtn
                    : styles.itemIconBtn
                }
              >
                <svg className={styles.icon}>
                  <use
                    xlinkHref={`${sprite}#icon-${
                      (getCurrentName(category.category) || {}).name
                    }`}
                  />
                </svg>
              </button>
              <h3 name={category.category} className={styles.itemTitle}>
                {category.category}
              </h3>
            </li>
          ))}
        </ul>
      </Panel>
      <Panel>
        <button
          type="button"
          name="stashAll"
          onClick={stashCategory}
          className={
            categNotSelected ? styles.buttonAllOrange : styles.buttonAll
          }
        >
          Все категории
        </button>
      </Panel>
    </>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  categoryChange: PropTypes.func.isRequired,
  stashCategory: PropTypes.func.isRequired,
  categNotSelected: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default CategoriesList;
