import { useMemo } from "react";
import { createBrowserClient } from "@supabase/auth-helpers-remix";

export type SupabaseConnect = {
  supabaseUrl: string;
  supabaseKey: string;
}

export const useSupabase = (connect: SupabaseConnect) => {
  const client = useMemo(() => createBrowserClient(connect.supabaseUrl, connect.supabaseKey), [connect])
  return client
}
