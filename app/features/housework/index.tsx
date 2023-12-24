import React from "react";
import * as styles from './style.css'
import { Card } from "~/components/Elements";

type Props = {}

export const Housework: React.FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <Card title={<CardHead />}>
        cardInner
      </Card>
    </div>
  )
}

type CardHeadProps = {}
const CardHead: React.FC<CardHeadProps> = (props) => {
  return (
    <div>
      head
    </div>
  )
}
