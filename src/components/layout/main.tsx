// @flow

import React from 'react'

import TechnologyList from 'components/content/technology-list'
import User from 'components/content/user'
import UserCard from 'components/content/user-card'


const technologies: Array<string> = ['CSS', 'HTML', 'JS'];
const userInfo: any = {
  imageUrl: 'images/user.jpg',
  age: 200,
}


const Main = () => (
  <main>
    <p>Lorem ipsum dolor ...</p>
    <TechnologyList technologies={technologies} />
    <UserCard age={userInfo.age} imageUrl={userInfo.imageUrl} />
  </main>
)


export default Main

