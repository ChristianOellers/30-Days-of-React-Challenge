// @flow

import React from 'react'

import dateText from 'helper/date-text'
import randomHexColor from 'helper/random-hex-color'
import Button from 'components/ui/button'


const Sidebar = () => (
  <>
    <Button text='' />
    <Button text={randomHexColor()} />
    <br />
    {dateText(new Date())}
  </>
)


export default Sidebar

