import React from 'react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick | Three' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function HouseworkPage(): JSX.Element {
  return (
    <>
      <div>ThreeTesting</div>
    </>
  );
}
