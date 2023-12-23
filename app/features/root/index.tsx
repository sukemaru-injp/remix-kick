import React from 'react';
import { root } from './style.css';
import { Button, Card } from '~/components/Elements';
import { useToast } from '~/utils/toast';

export const RootPage: React.FC = () => {
  const { warning } = useToast()
  return (
    <>
      <h1 className={root}>hello,remix!</h1>
      <Card title="ログイン / 新規登録">
        <Button onClick={() => warning('login')}>button</Button>
      </Card>
    </>
  );
};
