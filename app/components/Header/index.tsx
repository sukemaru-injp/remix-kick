import React from 'react';
import * as styles from './style.css';
import { Link, IconWrapper, HamburgerIcon } from '../Elements';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h2>我が家の</h2>
      </Link>
      <IconWrapper icon={HamburgerIcon} />
    </header>
  );
};
