import React, { Suspense } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import globalStyles from './styles/global.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoaderFunction } from '@remix-run/node';
import { useSupabase, SupabaseConnect } from './libs/supabase';
import { AuthContextProvider } from './provider/AuthContext';
import { AppContextProvider } from './provider/AppContext';
import { SustainedResourceProvider } from './utils/suspense';
import { RequiredLoginErrorBoundary } from './utils/RequiredLogin';
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from './components/common/style';

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: 'stylesheet', href: cssBundleHref },
        { rel: 'stylesheet', href: globalStyles },
      ]
    : []),
];

type LoaderData = {
  supabaseConnect: SupabaseConnect;
};

export const loader: LoaderFunction = async () => {
  const supabaseConnect: SupabaseConnect = {
    supabaseUrl: process.env.SUPABASE_URL ?? '',
    supabaseKey: process.env.SUPABASE_ANON_KEY ?? '',
  };

  return json({ supabaseConnect });
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
  const data = useLoaderData<LoaderData>();
  const client = useSupabase(data.supabaseConnect);

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <AppContextProvider supabaseClient={client}>
          <AuthContextProvider authClient={client.auth}>
            <SustainedResourceProvider>
              <Header />
              <RequiredLoginErrorBoundary>
                <main style={{ minHeight: '100vh', backgroundColor: colors.white }}>
                  <Outlet />
                  <ToastContainer />
                </main>
              </RequiredLoginErrorBoundary>
              <Footer />
            </SustainedResourceProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </Suspense>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
};
