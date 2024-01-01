import React, { useCallback, useState } from 'react';
import { useToast } from '~/utils/toast';
import { useAppContext } from '~/provider/AppContext';
import { Button } from '~/components/Elements';

export function SignOutSection(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const {
    supabaseClient: { auth },
  } = useAppContext();

  const signout = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      const { error } = await auth.signOut().finally(() => setLoading(false));

      if (error !== null) {
        return toast.error('サインアウトに失敗しました');
      }

      toast.success('サインアウトしました');
    },
    [auth, toast],
  );

  return (
    <>
      <Button onClick={signout} disabled={loading}>
        サインアウト
      </Button>
    </>
  );
}
