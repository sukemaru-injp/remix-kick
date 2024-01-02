import React, { useMemo } from 'react';
import * as styles from './style.css';
import { match } from 'ts-pattern';

type Props = {
  size?: 'full' | 'inner';
};

export const Loader = ({ size = 'full' }: Props): JSX.Element => {
  return useMemo(() => {
    return match(size)
      .with('full', () => {
        return (
          <div className={styles.container}>
            <div className={styles.loader} />
          </div>
        );
      })
      .with('inner', () => {
        return <div className={styles.loader} />;
      })
      .exhaustive();
  }, [size]);
};
