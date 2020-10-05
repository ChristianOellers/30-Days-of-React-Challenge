import React from 'react'

import dateText from 'helper/date-text'
import hexColor from 'helper/hex-color'
import Button from 'components/ui/button'


const Misc = () => (
  <>
    <Button text={hexColor()} />
    <br />
    {dateText(new Date())}
  </>
)


export default Misc

