import React, { Suspense } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import globalStyles from './styles/global.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loader } from './components/Elements';
import { LoaderFunction } from '@remix-run/node';
import { useSupabase, SupabaseConnect } from './libs/supabase';
import { AuthContextProvider } from './provider/AuthContext';
import { AppContextProvider } from './provider/AppContext';
import { ResourcePoolProvider } from './utils/suspense';
import { RequiredLoginErrorBoundary } from './utils/RequiredLogin';
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from './components/common/style';

// import { createServerClient } from '@supabase/auth-helpers-remix';

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
  // session: Session | null;
};

export const loader: LoaderFunction = async () => {
  const supabaseConnect: SupabaseConnect = {
    supabaseUrl: process.env.SUPABASE_URL ?? '',
    supabaseKey: process.env.SUPABASE_ANON_KEY ?? '',
  };

  // https://supabase.com/docs/guides/auth/auth-helpers/remix
  // const response = new Response();
  // const supabaseClient = createServerClient(
  //   supabaseConnect.supabaseUrl,
  //   supabaseConnect.supabaseKey,
  //   { request, response },
  // );
  // const {
  //   data: { session },
  // } = await supabaseClient.auth.getSession();

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
      <Suspense fallback={<Loader />}>
        <AppContextProvider supabaseClient={client}>
          <AuthContextProvider authClient={client.auth}>
            <ResourcePoolProvider>
              <Header />
              <RequiredLoginErrorBoundary>
                <main style={{ minHeight: '100vh', backgroundColor: colors.white }}>
                  <Outlet />
                  <ToastContainer />
                </main>
              </RequiredLoginErrorBoundary>
              <Footer />
            </ResourcePoolProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </Suspense>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
};
