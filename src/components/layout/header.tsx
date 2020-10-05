// @flow

/**
 * @todo Load text from API
 */

import React from 'react'

import IntroText from 'components/content/intro-text'


const content = {
  headline : 'Lorem ipsum',
  title : 'Dolor sit amet',
  subtitle : 'consectetur adipiscing elit',
  firstName : 'John',
  lastName : 'Doe',
  date : 'Jan 1, 2020',
}


const Header = () => (
  <header>
    <IntroText {...content} />
  </header>
)


export default Header

