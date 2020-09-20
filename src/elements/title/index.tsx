// Core
import React, { FC } from 'react';
import styles from './index.module.css';

type PropsTypes = {
  children: string;
};

export const Title: FC<PropsTypes> = ({ children }: PropsTypes) => <h1 className={styles.title}>{children}</h1>;
