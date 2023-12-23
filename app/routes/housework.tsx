import React from 'react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick | 家事' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function Housework(): JSX.Element {
  return (
    <>
      housework
    </>
  );
}
