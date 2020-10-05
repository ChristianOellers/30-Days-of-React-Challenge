// @flow

/**
 * Native 'PropTypes' implementation did not work with TypeScript and gave this error:
 * 'Property ... does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes ...'
 * 
 * Concepts
 * - Custom interfaces + Prop types (solve TS-error described above in a more complex way)
 * - Custom prop type validator to check for empty strings (there might be better libraries here)
 *
 * @link https://stackoverflow.com/questions/34779183/typescript-errors-while-converting-a-react-project
 * @link https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib
 */

import React from 'react'
import PropTypes from 'prop-types';


const styles = {
  padding: '.5rem 1rem',
}


interface ButtonProps extends React.Props<any> {
  text: string
}


class Button extends React.Component<ButtonProps, any> {
  static propTypes = {};

  render() {
    return <button style={styles}>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: (props: any, propName: string, componentName: string) => {
    if (!props.text.length) {
      return new Error(`Property ${props.text} must not be empty`);
    }
  }
}


export default Button

