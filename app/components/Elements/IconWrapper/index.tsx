import React, { ComponentType, useCallback } from 'react';
import * as styles from './style.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
  color?: 'primary' | 'white' | 'red';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export const IconWrapper: React.FC<Props> = ({
  icon: Icon,
  color = 'white',
  size = 'medium',
  onClick,
}) => {
  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      onClick?.();
    },
    [onClick],
  );

  return (
    <>
      {onClick ? (
        <button onClick={handleClick} className={styles.button[size]}>
          <Icon className={styles.iconColor[color]} />
        </button>
      ) : (
        <span className={styles.wrapper[size]}>
          <Icon className={styles.iconColor[color]} />
        </span>
      )}
    </>
  );
};
