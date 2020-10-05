// @flow

import React from 'react'

import Footer from 'components/layout/footer'
import Header from 'components/layout/header'
import Main from 'components/layout/main'
import Sidebar from 'components/layout/sidebar'

import './app.scss';


const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </div>
)


export default App

