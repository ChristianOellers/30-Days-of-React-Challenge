import React from 'react'


const User = (props: any) => {
  return (
    <>
      <h1>{props.firstName + ' ' + props.lastName}</h1>
      <small>{props.country}</small>
    </>
  )
}


export default User

