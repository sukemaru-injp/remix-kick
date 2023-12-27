import React, { useCallback, useState } from 'react';
import * as styles from './style.css';
import { addMonths, subMonths, format } from 'date-fns';
import { Card, IconWrapper, RightArrowIcon, LeftArrowIcon } from '~/components/Elements';

// type Props = {}

export const Housework: React.FC = () => {
  const [targetDate, setTargetDate] = useState(new Date());
  const next = useCallback(() => {
    setTargetDate(addMonths(targetDate, 1));
  }, [targetDate]);
  const prev = useCallback(() => {
    setTargetDate(subMonths(targetDate, 1));
  }, [targetDate]);

  return (
    <div className={styles.wrapper}>
      <Card title={<CardHead date={targetDate} onClickNext={next} onClickPrev={prev} />}>
        cardInner
      </Card>
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
      <IconWrapper icon={LeftArrowIcon} color='primary' onClick={props.onClickPrev} />
      <h3 className={styles.dateText}>{format(props.date, 'yyyy年MM月')}</h3>
      <IconWrapper icon={RightArrowIcon} color='primary' onClick={props.onClickNext} />
    </div>
  );
};
