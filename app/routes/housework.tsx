import React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { useAuthContext } from '~/provider/AuthContext';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick | 家事' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function Housework(): JSX.Element {
  const auth = useAuthContext();

  if (auth == null) {
    return <></>;
  }

  return <>housework</>;
}
