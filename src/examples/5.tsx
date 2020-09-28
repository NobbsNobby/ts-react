import React, { ReactElement, ReactNode } from 'react';

interface PropTypes<T> {
  children: (item: T) => ReactNode;
  items: Array<T>;
}

export function Component5<T>({ children, items }: PropTypes<T>): ReactElement {
  return <div>{items.map((item) => children(item))}</div>;
}
<Component5 items={[]}>{(item) => <p>{item}</p>}</Component5>;
