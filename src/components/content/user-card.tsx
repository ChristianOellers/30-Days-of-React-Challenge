import React from 'react'

import Image from './image'


const UserInfo = (props: any) => {
  const year: number = new Date().getFullYear()
  const age: number = parseInt(props.age);
  
  return (
    <p>Birth year: {year - age}</p>
  )
}


const UserCard = (props: any) => {
  return (
    <>
      <Image url={props.imageUrl} />
      <h2>User</h2>
      <UserInfo age={props.age} />
    </>
  )
}


export default UserCard

