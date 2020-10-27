// @flow

/**
 * Concept
 * - Separate rendering of items from their container.
 *   - This could be refactored and outsourced in a helper that generally handles this.
 */

import React from 'react';

const listMap = (technology: string) => <li key={technology}>{technology}</li>;

const TechnologyList = (props: any) => {
  const { technologies } = props;
  const markup: Array<any> = technologies.map(listMap);

  return <ul>{markup}</ul>;
};

export default TechnologyList;
