// Core
import React, { FC, useState } from 'react';

type PropsTypes = {
  title?: string;
  children?: never;
};

const Header: FC<PropsTypes> = ({ title }: PropsTypes) => {
  const content = typeof title === 'string' ? title.toLocaleLowerCase() : null;
  const [counter, setCounter] = useState<number>(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <button type="button" onClick={decrease}>
        -
      </button>
      <h3>{counter.toFixed()}</h3>
      <button type="button" onClick={increase}>
        +
      </button>
    </>
  );
};

Header.defaultProps = {
  title: 'Hello',
};

export default Header;
