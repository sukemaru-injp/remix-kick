import React from 'react';
import * as styles from './style.css';
import { Link } from '~/components/Elements';
import { LoginCard } from './inner/LoginCard';
import { SignOutSection } from './inner/SignOutSection';
import { useAuthContext } from '~/provider/AuthContext';

export const RootPage: React.FC = () => {
  const auth = useAuthContext();
  return (
    <div className={styles.root}>
      <div>
        <Link to='/housework' color='link'>
          to housework
        </Link>
      </div>

      <div>
        <LoginCard />
      </div>

      {auth.status === 'signedIn' && (
        <div>
          <SignOutSection />
        </div>
      )}
    </div>
  );
};
