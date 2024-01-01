import React, { useCallback } from "react";
import { Card, Button } from "~/components/Elements";
import { useToast } from "~/utils/toast";
// import { useAppContext } from "~/provider/AppContext";

export const LoginCard: React.FC = () => {
  const { warning } = useToast()
  // const { supabaseClient } = useAppContext()

  const onClickGoogle = useCallback< React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault()
    warning('login:google')
  }, [warning])

  return (
    <>
      <Card title='ログイン / 新規登録'>
        <Button onClick={onClickGoogle}>Googleアカウントログイン</Button>
      </Card>
    </>
  )
}
