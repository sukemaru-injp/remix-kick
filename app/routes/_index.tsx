import React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { RootPage } from '../features/root';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function IndexPage(): JSX.Element {
  return (
    <>
      <RootPage />
    </>
  );
}
