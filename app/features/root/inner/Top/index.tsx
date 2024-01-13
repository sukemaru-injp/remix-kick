import React from 'react';
import * as styles from './style.css';
import { Card } from '~/components/Elements';

export const Top: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.title}>家事分担を見える化する</h3>
      </div>

      <div className={styles.cardArea}>
        <Card title='住人を登録'>
          <></>
        </Card>

        <Card title='家事にポイントを振る'>
          <></>
        </Card>

        <Card title='「誰が」「何を」行ったか登録する'>
          <></>
        </Card>
      </div>
    </div>
  );
};
