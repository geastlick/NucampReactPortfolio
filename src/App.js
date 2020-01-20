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

import { fetchCustomers, fetchInventory, fetchOrders, fetchProducts, fetchUsers } from './redux/ActionCreators';

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

const mapDispatchToProps = {
  fetchCustomers: () => (fetchCustomers()),
  fetchInventory: () => (fetchInventory()),
  fetchOrders: () => (fetchOrders()),
  fetchProducts: () => (fetchProducts()),
  fetchUsers: () => (fetchUsers()),
}

class App extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
    this.props.fetchInventory();
    this.props.fetchOrders();
    this.props.fetchProducts();
    this.props.fetchUsers();
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppNavbar />
        <Switch>
          <Route path="/home" render={() => <FeatureCards features={this.props.features} />} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={AboutUs} />
          <Route path="/signin" render={() => <SignIn users={this.props.users.users} />} />
          <Redirect to="/home" />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
