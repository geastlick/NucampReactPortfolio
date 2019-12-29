import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import FeatureCards from './components/FeatureCards';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div>
    <AppHeader />
    <AppNavbar />
    <div id="content" className="homeHighlights"><FeatureCards /></div>
    <AppFooter />
    </div>
  );
}

export default App;
