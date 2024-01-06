import React, { useCallback, useState } from 'react';
import * as styles from './style.css';
import { Link, IconWrapper, HamburgerIcon, Tooltip } from '../Elements';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h2>我が家の</h2>
      </Link>
      <RightArea />
    </header>
  );
};

const RightArea = () => {
  const [open, setOpen] = useState(false);
  const onClickIcon = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <IconWrapper
        icon={HamburgerIcon}
        size='large'
        onClick={onClickIcon}
        data-tooltip-id='tooltip'
      />
      <Tooltip id='tooltip' isOpen={open}>
        tooltipです
      </Tooltip>
    </>
  );
};
