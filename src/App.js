import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoaderElement from './components/Loader/Loader';
import Auth from './pages/Auth/Auth';
import Statistics from './pages/Statistics/Statistics';
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedComponent from './hoc/ProtectedComponent';
import AuthCallback from './components/AuthCallback/AuthCallback';
import ContactsPage from './pages/Contacts/ContactsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { getUserOperation } from './redux/authUser/operations';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('userToken');

  // Это вынести в редакс
  const { isLoading } = useSelector(state => state.global);
  const { isloged } = useSelector(state => state.session);

  useEffect(() => {
    if (token) {
      const getUser = token2 => dispatch(getUserOperation(token2));
      getUser(token);
    }
  }, [dispatch, token]);

  return (
    <>
      {isLoading && <LoaderElement />}
      {!isLoading && (
        <>
          <Header />
          <Switch>
            {isloged && <Redirect exact from="/" to="/dashboard" />}
            <Route path="/" exact component={Auth} />
            <Route path="/auth">
              <AuthCallback />
            </Route>
            <ProtectedComponent path="/dashboard">
              <Dashboard />
            </ProtectedComponent>
            <ProtectedComponent path="/statistics">
              <Statistics />
            </ProtectedComponent>
            <ContactsPage path="/contacts" />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
