import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import FeatureCards from './components/FeatureCards';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import AppFooter from './components/AppFooter';
import SignIn from './components/SignIn';

const mapStateToProps = state => {
  return {
    customers: state.customers,
    features: state.features,
    inventory: state.inventory,
    orders: state.orders,
    products: state.products,
    users: state.users,
  };
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppNavbar />
        <Switch>
          <Route path="/home" render={() => <FeatureCards features={this.props.features} />} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={AboutUs} />
          <Route path="/signin" component={SignIn} />
          <Redirect to="/home" />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
