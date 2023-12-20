import React from "react";
import * as styles from "./style.css";
import { Link } from "../Elements";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h2>good habits</h2>
      </Link>
    </header>
  )
}
