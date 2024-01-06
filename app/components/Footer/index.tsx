import React from "react";
import * as styles from './style.css';
import { Link } from "../Elements";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Link to='/' color='sub'>お問い合わせ</Link>
        <Link to='/terms' color='sub'>利用規約</Link>
        <Link to='/privacy' color='sub'>プライバシーポリシー</Link>
      </div>
    </footer>
  )
};
