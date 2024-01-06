import React from 'react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick | 利用規約' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function Teams(): JSX.Element {
  return <>利用規約</>;
}
