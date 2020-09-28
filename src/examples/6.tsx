import React, { ReactElement, ReactNode } from 'react';

const styles = {
  primary: {
    color: 'blue',
  },
  danger: {
    color: 'red',
  },
};

type StylesType = typeof styles;

type ButtonType = keyof StylesType;

interface PropTypes {
  type: 'primary' | 'danger';
}

export function Button({ type }: PropTypes): ReactElement {
  return <button style={styles[type]}>123</button>;
}

const b = <Button type="primary" />;
