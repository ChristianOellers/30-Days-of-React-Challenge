// @flow

/**
 * Application entry point from a component-perspective.
 * Controls overall layout/page/screen.
 */

import React from 'react';

import Footer from './layout/footer';
import Header from './layout/header';
import Main from './layout/main';

import './app.scss';

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
