import React, { useCallback, useState, useMemo, Suspense, useReducer } from 'react';
import * as styles from './style.css';
import { ResidentsCard } from './inner/ResidentsCard';
import { addMonths, subMonths, format } from 'date-fns';
import { Card, IconWrapper, RightArrowIcon, LeftArrowIcon, Loader } from '~/components/Elements';
import { useGetResidentsRepository } from './repository/getResidentsRepository';
import { useSustainedResourceContext, Resource } from '~/utils/suspense';
import { useToast } from '~/utils/toast';

type Props = {
  uid: string;
};

export const Housework: React.FC<Props> = ({ uid }) => {
  const sustained = useSustainedResourceContext();

  const toast = useToast();

  const [targetDate, setTargetDate] = useState(new Date());

  const next = useCallback(() => {
    setTargetDate(addMonths(targetDate, 1));
  }, [targetDate]);
  const prev = useCallback(() => {
    setTargetDate(subMonths(targetDate, 1));
  }, [targetDate]);

  const { getResidents } = useGetResidentsRepository(uid);

  const [renderCount, forceUpdate] = useReducer((n) => n + 1, 0);
  const getResidentsResource = useMemo(
    () =>
      sustained.get(`getResidents${renderCount}`, () => {
        return Resource.set(async () => {
          const result = await getResidents();
          return result.match(
            (v) => v,
            (err) => {
              console.error('error', err);
              toast.error('取得に失敗しました');
              return [];
            },
          );
        });
      }),
    [getResidents, sustained, toast, renderCount],
  );

  return (
    <div className={styles.wrapper}>
      <Card title={<CardHead date={targetDate} onClickNext={next} onClickPrev={prev} />}>
        cardInner
      </Card>
      <Suspense fallback={<Loader />}>
        <ResidentsCard
          residentsResource={getResidentsResource}
          uid={uid}
          forceUpdate={forceUpdate}
        />
      </Suspense>
    </div>
  );
};

type CardHeadProps = {
  date: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
};
const CardHead: React.FC<CardHeadProps> = (props) => {
  return (
    <div className={styles.header}>
      <IconWrapper icon={LeftArrowIcon} color='primary' onClick={props.onClickPrev} size='large' />
      <h3 className={styles.dateText}>{format(props.date, 'yyyy年M月')}</h3>
      <IconWrapper icon={RightArrowIcon} color='primary' size='large' onClick={props.onClickNext} />
    </div>
  );
};
