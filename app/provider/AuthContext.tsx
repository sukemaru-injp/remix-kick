import React, { createContext, useContext, useEffect, useState } from 'react';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

type AppAuth = {
  id: string;
};

const AuthContext = createContext<AppAuth | null>(null);

type Props = {
  authClient: SupabaseAuthClient;
  children: React.ReactNode;
};

export function AuthContextProvider(props: Props): JSX.Element {
  const [appAuth, setAppAuth] = useState<AppAuth | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = props.authClient.onAuthStateChange((event, session) => {
      console.info('fireeeee', event, session);
      if (session !== null) {
        const { user } = session;
        setAppAuth({
          id: user.id,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [props.authClient]);

  return <AuthContext.Provider value={appAuth}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
