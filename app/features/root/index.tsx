import React from 'react';
import * as styles from './style.css';
import { Link } from '~/components/Elements';
import { LoginCard } from './inner/LoginCard';

export const RootPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>
        <Link to='/housework' color='link'>
          to housework
        </Link>
      </div>
      <LoginCard />
    </div>
  );
};
