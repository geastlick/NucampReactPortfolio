import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import FeatureCards from './components/FeatureCards';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <AppNavbar />
      <Switch>
        <Route path="/home" component={FeatureCards} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
        <Redirect to="/home" />
      </Switch>
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
