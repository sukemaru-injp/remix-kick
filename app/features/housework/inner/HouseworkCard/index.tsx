import React, { useState, useCallback } from 'react';
import * as styled from './style.css';
import { Card, LinkStyledButton, AddIcon, Button } from '~/components/Elements';

type Props = {
  uid: string;
};
export const HouseworkCard: React.FC<Props> = () => {
  return (
    <Card title='家事' footer={<Footer />}>
      <div className={styled.inner}>house works</div>
    </Card>
  );
};

const Footer = (): JSX.Element => {
  const [addMode, setAddMode] = useState(false);

  const add = useCallback(() => {
    setAddMode(true);
  }, []);

  const cancel = useCallback(() => {
    setAddMode(false);
  }, []);

  return (
    <div>
      {addMode ? (
        <>
          <Form cancel={cancel} loading={false} />
        </>
      ) : (
        <div className={styled.footerButton}>
          <LinkStyledButton icon={AddIcon} onClick={add}>
            家事を追加
          </LinkStyledButton>
        </div>
      )}
    </div>
  );
};

type FormProps = {
  cancel: () => void;
  loading: boolean;
};

const Form = ({ cancel, loading }: FormProps): JSX.Element => {
  return (
    <form>
      <div>form inner</div>
      <div className={styled.formButtonSection}>
        <Button color='secondary' onClick={cancel} disabled={loading} type='button'>
          キャンセル
        </Button>
        <Button color='primary' type='submit' disabled={loading}>
          保存
        </Button>
      </div>
    </form>
  );
};
