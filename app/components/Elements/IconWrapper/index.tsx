import React, { ComponentType, useMemo } from 'react';
import { match } from 'ts-pattern';
import * as styles from './style.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
  color?: 'main' | 'white';
};

export const IconWrapper: React.FC<Props> = ({ icon: Icon, color = 'white' }) => {
  const iconStyle = useMemo(() => {
    return match(color)
      .with('main', () => styles.iconMain)
      .with('white', () => styles.iconWhite)
      .exhaustive();
  }, [color]);

  return (
    <span className={styles.wrapper}>
      <Icon className={iconStyle} />
    </span>
  );
};
