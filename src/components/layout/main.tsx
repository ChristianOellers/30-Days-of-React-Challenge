// @flow

import React from 'react'

import TechnologyList from 'components/content/technology-list'
import User from 'components/content/user'
import UserCard from 'components/content/user-card'


const technologies: Array<string> = ['CSS', 'HTML', 'JS'];
const userInfo = {
  imageUrl : 'images/user.jpg',
  firstName : 'Asabeneh',
  lastName : 'Yetayeh',
  country : 'Finland',
  age : 200,
}


const Main = () => (
  <main>
    <p>Prerequisite to get{' '}started:</p>
    <TechnologyList technologies={technologies} />
    <UserCard age={userInfo.age} imageUrl={userInfo.imageUrl} />
    <User 
      firstName={userInfo.firstName} 
      lastName={userInfo.lastName} 
      country={userInfo.country}
    />
  </main>
)


export default Main

