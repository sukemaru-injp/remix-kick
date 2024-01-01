import React, { useCallback, useState } from 'react';
import * as styles from './style.css';
import { Card, LinkStyledButton, AddIcon, Button } from '~/components/Elements';
import { Input } from '~/components/Form';

export const ResidentsCard: React.FC = () => {
  const [addMode, setAddMode] = useState(false);

  const add = useCallback(() => {
    setAddMode(true);
  }, []);

  const cancel = useCallback(() => {
    setAddMode(false);
  }, []);

  return (
    <Card title='住人' footer={<Footer addMode={addMode} add={add} cancel={cancel} />}>
      <div className={styles.innerWrapper}>
        not impl
        {addMode && (
          <div className={styles.inputSection}>
            <Input />
          </div>
        )}
      </div>
    </Card>
  );
};

type FooterProps = {
  addMode: boolean;
  add: () => void;
  cancel: () => void;
};
const Footer: React.FC<FooterProps> = ({ addMode, add, cancel }) => {
  return (
    <div className={styles.footer}>
      {addMode ? (
        <>
          <Button color='secondary' onClick={cancel}>
            キャンセル
          </Button>
          <Button color='primary'>保存</Button>
        </>
      ) : (
        <LinkStyledButton icon={AddIcon} onClick={add}>
          住人を追加
        </LinkStyledButton>
      )}
    </div>
  );
};
