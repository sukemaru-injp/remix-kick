import React from 'react';
import * as styled from './style.css';
import { Card } from '~/components/Elements';

type Props = {
  uid: string;
};
export const HouseworkCard: React.FC<Props> = () => {
  return (
    <Card title='家事'>
      <div className={styled.inner}>house works</div>
    </Card>
  );
};
