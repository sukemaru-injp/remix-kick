import React, { ComponentType } from 'react';
import * as styles from './style.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
};

export const IconWrapper: React.FC<Props> = ({ icon: Icon }) => {
  return (
    <span className={styles.wrapper}>
      <Icon className={styles.icon} />
    </span>
  );
};
