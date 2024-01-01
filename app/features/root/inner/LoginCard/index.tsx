import React, { useCallback, useState } from 'react';
import { Card, Button } from '~/components/Elements';
import { useToast } from '~/utils/toast';
import { useAppContext } from '~/provider/AppContext';

export const LoginCard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { supabaseClient } = useAppContext();

  const onClickGoogle = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      const { error } = await supabaseClient.auth
        .signInWithOAuth({
          provider: 'google',
        })
        .finally(() => setLoading(false));

      if (error !== null) {
        return toast.error('エラーが発生しました');
      }
      toast.success('ログインしました');
    },
    [toast, supabaseClient],
  );

  return (
    <>
      <Card title='ログイン / 新規登録'>
        <Button onClick={onClickGoogle} disabled={loading}>
          Googleアカウントログイン
        </Button>
      </Card>
    </>
  );
};
