import React, { ComponentProps } from 'react';
import { Link as RemixLink } from '@remix-run/react';
import * as styles from './style.css';

type Props = ComponentProps<typeof RemixLink> & { color?: 'link' | 'white' };

export const Link: React.FC<Props> = ({ color = 'white', ...props }) => {
  const styling = styles.linkStyle[color];
  return (
    <RemixLink {...props} className={styling}>
      {props.children}
    </RemixLink>
  );
};
