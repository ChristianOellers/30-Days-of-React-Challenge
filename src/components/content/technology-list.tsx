// @flow

import React from 'react'


const listMap = (technology: string) => <li key={technology}>{technology}</li>


const TechnologyList = (props: any) => {
  const markup: Array<{}> = props.technologies.map(listMap)

  return <ul>{markup}</ul>
}


export default TechnologyList

