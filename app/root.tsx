import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import globalStyles from './styles/global.css';
import { Header } from './components/Header';
import { LoaderFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: 'stylesheet', href: cssBundleHref },
        { rel: 'stylesheet', href: globalStyles },
      ]
    : []),
];

export const loader: LoaderFunction = async () => {
  return { message: 'testing' };
};

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
  const data = useLoaderData<{ message: string }>();
  console.log(data);

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
