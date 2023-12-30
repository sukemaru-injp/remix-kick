import React, { useCallback, useState } from 'react';
import * as styles from './style.css';
import { Card, LinkStyledButton, AddIcon } from '~/components/Elements';
import { Input } from '~/components/Form';

export const ResidentsCard: React.FC = () => {
  const [addMode, setAddMode] = useState(false);

  const add = useCallback(() => {
    setAddMode(true);
  }, []);

  return (
    <Card title='住人' footer={<Footer addMode={addMode} add={add} />}>
      <>
        not impl <Input />
      </>
    </Card>
  );
};

type FooterProps = {
  addMode: boolean;
  add: () => void;
};
const Footer: React.FC<FooterProps> = ({ add }) => {
  return (
    <div className={styles.footer}>
      <LinkStyledButton icon={AddIcon} onClick={add}>
        住人を追加
      </LinkStyledButton>
    </div>
  );
};
