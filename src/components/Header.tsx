// Core
import React, { FC } from 'react';

type PropsTypes = {
  title?: string;
  children?: never;
};

const Header: FC<PropsTypes> = ({ title }: PropsTypes) => {
  const content = typeof title === 'string' ? title.toLocaleLowerCase() : null;

  return <h1>{content}</h1>;
};

Header.defaultProps = {
  title: 'Hello',
};

export default Header;
