// @flow

/**
 * Concept
 * - Demonstrate custom 'propTypes' validation
 */

import React from 'react';

import dateText from 'helpers/date-text';
import randomHexColor from 'helpers/random-hex-color';
import Button from 'components/ui/button';

const Footer = () => (
  <>
    <Button text="" />
    <Button text={randomHexColor()} />
    <br />
    {dateText(new Date())}
  </>
);

export default Footer;
