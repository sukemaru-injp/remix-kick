import React from 'react';
import * as styles from './style.css';

type Props = React.ComponentProps<'input'>;

export const Input: React.FC<Props> = (props) => {
  return <input {...props} className={styles.input} />;
};
