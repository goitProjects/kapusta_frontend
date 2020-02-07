import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import StatisticMenu from '../../components/StatisticMenu/StatisticMenu';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import StatisticAmounts from '../../components/StatisticAmounts/StatisticAmounts';
import Chart from '../../components/Chart/Chart';
import Main from '../../components/Main/Main';

import { getCategoriesOperation } from '../../redux/categories/operations';
import { getTransactionsOperation } from '../../redux/transactions/operations';

import {
  getBalance,
  getCosts,
  getCreatedDate,
  getCategoriesSelector,
  getIncomes,
} from '../../redux/Statistics/StatisticsSelectors';

class Statistics extends Component {
  state = {
    categoriesList: 0,
    selectedCategory: '',
    date: '',
    costs: null,
    income: null,
    balance: 0,
    createdAt: '',
  };

  componentDidMount() {
    const {
      getCategories,
      getTransactions,
      balance,
      createdDate,
      costs,
      categories,
      income,
    } = this.props;

    const currentTime = moment().format();
    getCategories();
    getTransactions();

    this.setState({
      categoriesList: categories,
      date: currentTime,
      costs,
      balance,
      income,
      createdAt: createdDate,
    });
  }

  componentDidUpdate(prevProps) {
    const { balance, createdDate, costs, categories, income } = this.props;
    if (
      prevProps.balance !== balance ||
      prevProps.createdDate !== createdDate ||
      prevProps.costs !== costs ||
      prevProps.categories !== categories ||
      prevProps.income !== income
    ) {
      this.setPropsInState(balance, createdDate, costs, categories, income);
    }
  }

  setPropsInState = (balance, createdDate, costs, categories, income) =>
    this.setState({
      balance,
      createdAt: createdDate,
      costs,
      categoriesList: categories,
      income,
    });

  monthChangeHandler = e => {
    // Проверка на дату создания юзера?
    const { name } = e.target;
    const { date } = this.state;
    if (name === 'leftBtn') {
      this.setState({
        date: moment(date)
          .add(-1, 'month')
          .format(),
      });
    }
    if (name === 'rightBtn') {
      this.setState({
        date: moment(date)
          .add(1, 'month')
          .format(),
      });
    }
  };

  categoryChangeHandler = e => {
    const { selectedCategory } = this.state;

    if (selectedCategory !== e.target.name) {
      this.setState({ selectedCategory: e.target.name });
    } else {
      this.setState({ selectedCategory: '' });
    }
  };

  noneCategoryChangeHandler = e => {
    if (e.target.name === 'stashAll') {
      this.setState({ selectedCategory: '' });
    }
  };

  //----------------------------------------------------------------------------------

  costsCountHandler = countCosts => {
    const { date, categoriesList } = this.state;
    const costsList = countCosts;
    const categories = categoriesList.map(category => ({
      category: category.name,
      amount: costsList
        .filter(
          cost =>
            moment(cost.date).format('MMMM YYYY') ===
            moment(date).format('MMMM YYYY'),
        )
        .reduce((acc, cost) => {
          return category.name === cost.product.category.name
            ? acc + cost.amount
            : acc;
        }, 0),
      id: category._id,
    }));
    return categories;
  };

  productsCounthandler = costs => {
    const backgroundColor = [
      'rgba(255,129,45)',
      'rgba(255,217,192)',
      'rgba(255,217,192)',
      'rgba(255,129,45)',
      'rgba(255,217,192)',
      'rgba(255,217,192)',
      'rgba(255,129,45)',
      'rgba(255,217,192)',
      'rgba(255,217,192)',
      'rgba(255,129,45)',
      'rgba(255,217,192)',
    ];
    const { date, selectedCategory } = this.state;
    const filteredCosts = costs
      .filter(
        cost =>
          moment(cost.date).format('MMMM YYYY') ===
            moment(date).format('MMMM YYYY') &&
          cost.product.category.name === selectedCategory,
      )
      .sort((a, b) => a.amount - b.amount);
    const redCosts = filteredCosts.reduce((acc, prod) => {
      if (prod.product.name in acc) {
        acc[prod.product.name] += prod.amount;
      } else {
        acc[prod.product.name] = prod.amount;
      }
      return acc;
    }, {});
    let sortRedCosts = Object.entries(redCosts).sort((a, b) => b[1] - a[1]);

    if (sortRedCosts.length > 11) {
      sortRedCosts = sortRedCosts.slice(0, 11);
    }
    const result = {
      labels: sortRedCosts.map(product => {
        return product[0];
      }),
      datasets: [
        {
          label: selectedCategory,
          data: sortRedCosts.map(product => product[1]),
          backgroundColor,
        },
      ],
    };
    return result;
  };

  createdAtButtonHandler = () => {
    const { createdAt, date } = this.state;
    if (moment(date).isAfter(createdAt)) {
      return false;
    }
    return true;
  };

  nextMonthButtonHandler = () => {
    const { date } = this.state;
    if (moment().format('MMMM YYYY') === moment(date).format('MMMM YYYY')) {
      return true;
    }
    return false;
  };

  dataFormatHandler = data => {
    const sortDate = Object.entries(data).sort(
      (a, b) => b[1].amount - a[1].amount,
    );

    const labelsList = sortDate.map(el => el[1].category);
    const amountsList = sortDate.map(el => el[1].amount);
    const result = {
      labels: labelsList,
      datasets: [
        {
          label: 'Все продукты',
          data: amountsList,
          backgroundColor: [
            'rgba(255,129,45)',
            'rgba(255,217,192)',
            'rgba(255,217,192)',
            'rgba(255,129,45)',
            'rgba(255,217,192)',
            'rgba(255,217,192)',
            'rgba(255,129,45)',
            'rgba(255,217,192)',
            'rgba(255,217,192)',
            'rgba(255,129,45)',
            'rgba(255,217,192)',
          ],
        },
      ],
    };
    return result;
  };

  stashButtonHandler = () => {
    const { selectedCategory } = this.state;
    if (selectedCategory === '') {
      return true;
    }
    return false;
  };

  render() {
    const {
      date,
      costs,
      selectedCategory,
      balance,
      income,
      categoriesList,
    } = this.state;
    let categoryList = [];
    let chartData = null;
    const prevMonth = this.createdAtButtonHandler();
    const nextMonth = this.nextMonthButtonHandler();
    const activeStashBtn = this.stashButtonHandler();

    let costsSum = 0;
    if (costs && costs.length > 0) {
      costsSum = costs
        .filter(
          item =>
            moment(item.date).format('MMMM YYYY') ===
            moment(date).format('MMMM YYYY'),
        )
        .reduce((acc, el) => acc + el.amount, 0);
    }

    let incomeSum = 0;
    if (income && income.length > 0) {
      incomeSum = income
        .filter(
          item =>
            moment(item.date).format('MMMM YYYY') ===
            moment(date).format('MMMM YYYY'),
        )
        .reduce((acc, el) => acc + el.amount, 0);
    }

    if (costs && costs.length > 0) {
      categoryList = this.costsCountHandler(costs);
      if (selectedCategory === '') {
        chartData = this.dataFormatHandler(categoryList);
      } else {
        chartData = this.productsCounthandler(costs);
      }
    } else if (categoriesList && categoriesList.length > 0) {
      categoryList = categoriesList.map(category => ({
        category: category.name,
        amount: 0,
        id: category.name,
      }));
    }
    return (
      <Main>
        <StatisticMenu
          backMonthHandler={prevMonth}
          nextMonthHandler={nextMonth}
          monthChanger={this.monthChangeHandler}
          date={date}
          balance={balance}
        />
        <StatisticAmounts costsSum={costsSum} incomeSum={incomeSum} />
        <CategoriesList
          selectedCategory={selectedCategory}
          categories={categoryList}
          categoryChange={this.categoryChangeHandler}
          stashCategory={this.noneCategoryChangeHandler}
          categNotSelected={activeStashBtn}
        />
        {chartData ? (
          <Chart chartData={chartData} />
        ) : (
          <p style={{ margin: 0, marginTop: '20px', textAlign: 'center' }}>
            Для отображения графика, внесите расходы на главной странице!
          </p>
        )}
      </Main>
    );
  }
}

const mapStateToProps = store => ({
  balance: getBalance(store),
  createdDate: getCreatedDate(store),
  costs: getCosts(store),
  categories: getCategoriesSelector(store),
  income: getIncomes(store),
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesOperation()),
  getTransactions: () => dispatch(getTransactionsOperation()),
});

Statistics.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
  createdDate: PropTypes.string.isRequired,
  costs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  income: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
