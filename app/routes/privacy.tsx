import React from 'react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'RemixKick | プライバシーポリシー' }, { name: 'description', content: 'Hello,Remix!' }];
};

export default function Privacy(): JSX.Element {
  return (
    <>
      プライバシーポリシー
    </>
  )
}
