import React, { ComponentProps } from 'react';
import { Link as RemixLink } from '@remix-run/react';
import * as styles from './style.css';

type Props = ComponentProps<typeof RemixLink>;

export const Link: React.FC<Props> = (props) => {
  return (
    <RemixLink {...props} className={styles.link}>
      {props.children}
    </RemixLink>
  );
};
