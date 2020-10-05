import React from 'react'


const Instructor = (props: any) => {
  return ( 
    <p>Instructor: {props.firstName} {props.lastName}</p>
  )
}


const IntroText = (props: any) => {
  return (
    <>
      <h1>{props.headline}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <Instructor 
        firstName={props.firstName} 
        lastName={props.lastName} 
      />
      <small>Date: {props.date}</small>
    </>
  )
}


export default IntroText

