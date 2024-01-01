import React, { createContext, useContext, useEffect, useState } from 'react';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

type AppAuth =
  | { status: 'signedOut' }
  | {
      status: 'signedIn';
      id: string;
    };

const AuthContext = createContext<AppAuth>({ status: 'signedOut' });

type Props = {
  authClient: SupabaseAuthClient;
  children: React.ReactNode;
};

export function AuthContextProvider(props: Props): JSX.Element {
  const [appAuth, setAppAuth] = useState<AppAuth>({ status: 'signedOut' });

  useEffect(() => {
    const {
      data: { subscription },
    } = props.authClient.onAuthStateChange((event, session) => {
      console.info('fireeeee', event, session);
      if (session !== null) {
        const { user } = session;
        return setAppAuth({
          status: 'signedIn',
          id: user.id,
        });
      }

      setAppAuth({ status: 'signedOut' });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [props.authClient]);

  return <AuthContext.Provider value={appAuth}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
