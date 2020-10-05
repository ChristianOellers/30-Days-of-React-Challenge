// @flow

import React from 'react'

import IntroText from 'components/content/intro-text'


const content = {
  headline : 'Welcome to 30 Days Of React',
  title : 'Getting Started React',
  subtitle : 'JavaScript Library',
  firstName : 'Asabeneh',
  lastName : 'Yetayeh',
  date : 'Oct 3, 2020',
}


const Header = () => (
  <header>
    <IntroText {...content} />
  </header>
)


export default Header

