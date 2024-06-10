import React, { Suspense, useMemo } from 'react';
import * as styles from './style.css';
import { Card } from '~/components/Elements';
import { useResourcePoolContext, Resource, CachedResource } from '~/utils/suspense';

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));

export const Top: React.FC = () => {
  const resourcePool = useResourcePoolContext();

  const getResource = useMemo(
    () =>
      resourcePool.get(`get`, () => {
        return Resource.set(async () => {
          await sleep(5000);
          return 'ok:test';
        });
      }),
    [resourcePool],
  );
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

      <Suspense fallback={<div>loading...</div>}>
        <Presenter resource={getResource} />
      </Suspense>
    </div>
  );
};

const Presenter: React.FC<{ resource: CachedResource<string> }> = ({ resource }) => {
  const val = resource.read();
  return <>{val}</>;
};
