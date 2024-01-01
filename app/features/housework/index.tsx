import React, { useCallback, useState, useMemo, Suspense } from 'react';
import * as styles from './style.css';
import { ResidentsCard } from './inner/ResidentsCard';
import { addMonths, subMonths, format } from 'date-fns';
import { Card, IconWrapper, RightArrowIcon, LeftArrowIcon } from '~/components/Elements';
import { useGetResidentsRepository } from './repository/getResidentsRepository';
import { useSustainedResourceContext, Resource } from '~/utils/suspense';

type Props = {
  uid: string;
};

export const Housework: React.FC<Props> = ({ uid }) => {
  const sustained = useSustainedResourceContext();

  const [targetDate, setTargetDate] = useState(new Date());

  const next = useCallback(() => {
    setTargetDate(addMonths(targetDate, 1));
  }, [targetDate]);
  const prev = useCallback(() => {
    setTargetDate(subMonths(targetDate, 1));
  }, [targetDate]);

  const { getResidents } = useGetResidentsRepository(uid);

  const getResidentsResource = useMemo(
    () =>
      sustained.get(`getResidents`, () => {
        return Resource.set(async () => {
          const result = await getResidents();
          return result.match(
            (v) => v,
            (err) => {
              console.error('error', err);
              return [];
            },
          );
        });
      }),
    [getResidents, sustained],
  );

  return (
    <div className={styles.wrapper}>
      <Card title={<CardHead date={targetDate} onClickNext={next} onClickPrev={prev} />}>
        cardInner
      </Card>
      <Suspense fallback={<>Loading...</>}>
        <ResidentsCard residentsResource={getResidentsResource} />
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
