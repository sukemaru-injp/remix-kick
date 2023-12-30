import { useMemo } from 'react';
import { createBrowserClient } from '@supabase/auth-helpers-remix';
import { Database } from 'modules/database.types';

export type SupabaseConnect = {
  supabaseUrl: string;
  supabaseKey: string;
};

export const useSupabase = (connect: SupabaseConnect) => {
  const client = useMemo(
    () => createBrowserClient<Database>(connect.supabaseUrl, connect.supabaseKey),
    [connect],
  );
  return client;
};
