import React from 'react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import globalStyles from './styles/global.css';
import { Header } from './components/Header';

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: 'stylesheet', href: cssBundleHref },
        { rel: 'stylesheet', href: globalStyles },
      ]
    : []),
];

export default function App() {
  return (
    <html lang='ja'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
      </body>
    </html>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
};
