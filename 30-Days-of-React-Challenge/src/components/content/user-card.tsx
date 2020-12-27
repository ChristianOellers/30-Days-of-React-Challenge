// @flow

/**
 * Concept
 * - Playground for property parsing ...
 */

import React from 'react';

import Image from './image';

const UserInfo = (props: any) => {
  const { age } = props;
  const year: number = new Date().getFullYear();
  const ageNumber: number = parseInt(age, 10);

  return <p>Birth year: {year - ageNumber}</p>;
};

const UserCard = (props: any) => {
  const { age, imageUrl } = props;

  return (
    <>
      <Image url={imageUrl} />
      <h2>User</h2>
      <UserInfo age={age} />
    </>
  );
};

export default UserCard;
