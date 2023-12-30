import React from 'react';
import * as styles from './style.css';

type Props = React.ComponentProps<'button'> & OwnProps;
type OwnProps = {
  icon?: React.ComponentType;
};

export const LinkStyledButton: React.FC<Props> = ({ icon: Icon, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {Icon && (
        <span className={styles.iconWrapper}>
          <Icon />
        </span>
      )}
      {props.children}
    </button>
  );
};
