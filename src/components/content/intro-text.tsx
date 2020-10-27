// @flow

/**
 * Concept
 * - Write 'component helpers' before the component to separate
 *   code for potential further refactorings from the actual component.
 *   - 'Instructor' could be outsourced, if it was more complex or required by other components.
 */

import React from 'react';

const Instructor = (props: any) => {
  const { firstName, lastName } = props;

  return (
    <p>
      Instructor: {firstName} {lastName}
    </p>
  );
};

const IntroText = (props: any) => {
  const { headline, title, subtitle, firstName, lastName, date } = props;

  return (
    <>
      <h1>{headline}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <Instructor firstName={firstName} lastName={lastName} />
      <small>Date: {date}</small>
    </>
  );
};

export default IntroText;
