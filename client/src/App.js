import React, { Fragment, useEffect } from 'react';
import Navbar from './components/HomePage/Navbar';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignIn';
import CreateProfile from './components/profile-forms/CreateProfile';
import Profiles from './components/profiles/Profiles';
import editProfile from './components/profile-forms/editProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './components/pages/Feedback/Feedback';
import UserForm from './components/pages/Register/UserForm';
import AdminUserForm from './components/admin/AdminRegister/AdminUserForm';
import BankD from './components/pages/BankD';
import ViewBank from './components/pages/ViewBank';
import Dashbord from './components/dashboard/Dashbord';
import Profile from './components/profile/Profile'
import Historybill from './components/profile/Historybill'
import Qrscanner from './components/dashboard/Qrscanner';
import Adminpage from './components/admin/Adminpage'
import PrivateRoute from './components/routing/PrivateRoute';
import Alert from './components/alertComu/Alert';
import { loadUser } from './actions/auth';
import Notfound from './components/pages/Notfound';
import setAuthToken from './utils/setAuthToken';
//redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Alert />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/About-Us' component={AboutUs} />
              <Route path='/products' component={Products} />
              <Route path='/Sign-in' component={SignIn} />
              <Route path='/profiles' component={Profiles} />
              <Route path='/feed-back' component={Feedback} />
              <Route path='/sign-up' component={UserForm} />
              <Route path='/admin-sign-up' component={AdminUserForm} />
              <Route path='/bank-d' component={BankD} />
              <Route path='/view-bank' component={ViewBank} />
              <Route path='/profile/:_id' component={Profile} />
              <Route path='/history/:_id' component={Historybill} />
              <Route path='/qr-scanner' component={Qrscanner} />
              <PrivateRoute path='/admin-page' component={Adminpage} />
              <PrivateRoute path='/main-menu' component={Dashbord} />
              <PrivateRoute path='/create-profile' component={CreateProfile} />
              <PrivateRoute path='/edit-profile' component={editProfile} />
              <Route component={Notfound} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    </>
  );
}

export default App;
