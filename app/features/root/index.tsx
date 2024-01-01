import React from 'react';
import * as styles from './style.css';
import { Button, Card, Link } from '~/components/Elements';
import { useToast } from '~/utils/toast';

export const RootPage: React.FC = () => {
  const { warning } = useToast();
  return (
    <div className={styles.root}>
      <div>
        <Link to='/housework' color='link'>
          to housework
        </Link>
      </div>
      <Card title='ログイン / 新規登録'>
        <Button onClick={() => warning('login')}>Googleアカウントログイン</Button>
      </Card>
    </div>
  );
};
