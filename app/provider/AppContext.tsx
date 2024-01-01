import React, { createContext, useContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'modules/database.types';

type Props = {
  supabaseClient: SupabaseClient<Database>;
  children: React.ReactNode;
};
type AppContextType = {
  supabaseClient: SupabaseClient<Database>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: React.FC<Props> = ({ children, supabaseClient }) => {
  return (
    <AppContext.Provider
      value={{
        supabaseClient: supabaseClient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const app = useContext(AppContext);
  if (app == null) {
    throw new Error('not provided app context');
  }

  return app;
};
