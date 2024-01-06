import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import * as styles from './style.css';

// react-tooltip style
// https://react-tooltip.com/docs/getting-started
import 'react-tooltip/dist/react-tooltip.css';

type Props = {
  children?: React.ReactNode;
  id?: string;
  isOpen?: boolean;
};

export const Tooltip: React.FC<Props> = (props) => {
  return (
    <>
      <ReactTooltip className={styles.tooltip} isOpen={props.isOpen} id={props.id}>
        {props.children}
      </ReactTooltip>
    </>
  );
};
