import React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { useAuthContext } from '~/provider/AuthContext';
import { Housework } from '~/features/housework';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick | 家事' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function HouseworkPage(): JSX.Element {
  const auth = useAuthContext();

  if (auth.status === 'signedOut') {
    return <>ログインしてください</>;
  }

  return (
    <>
      <Housework uid={auth.id} />
    </>
  );
}
