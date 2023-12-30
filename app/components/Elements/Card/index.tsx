import React from 'react';
import * as styles from './style.css';
type Props = {
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
};
export function Card(props: Props): JSX.Element {
  return (
    <div className={styles.card}>
      {props.title && (
        <div className={styles.head}>
          {typeof props.title === 'string' ? (
            <h3 className={styles.title}>{props.title}</h3>
          ) : (
            props.title
          )}
        </div>
      )}
      <div className={styles.content}>{props.children}</div>
      {props.footer && <div className={styles.foot}>{props.footer}</div>}
    </div>
  );
}
