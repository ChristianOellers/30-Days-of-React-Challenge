// @flow

/**
 * Concepts
 * - Custom interfaces + Prop types (solve TS-error described above in a more complex way)
 * - Custom prop type validator to check for empty strings (there might be better libraries here)
 * - CSS style implementation (if defined here, should be animated or come from another source)
 *
 * Native 'PropTypes' implementation did not work with TypeScript and gave this error:
 * 'Property ... does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes ...'
 *
 * @link https://stackoverflow.com/questions/34779183/typescript-errors-while-converting-a-react-project
 * @link https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib
 */

import React from 'react';

const styles = {
  padding: '.5rem 1rem',
};

interface ButtonProps {
  text: string;
}

class Button extends React.Component<ButtonProps, any> {
  static propTypes = {};

  render() {
    return (
      <button className="btn" style={styles}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: (props: any, _propName: string, _componentName: string) => {
    if (!props.text.length) {
      return new Error(`Property ${props.text} must not be empty`);
    }
  },
};

export default Button;
