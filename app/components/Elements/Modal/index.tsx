import React, { useCallback } from 'react';
import ReactModal from 'react-modal';
import * as styled from './style.css';
import { Button } from '..';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  disabledClose?: boolean;
  children?: React.ReactNode;
  primaryButton?: React.ComponentProps<typeof Button>;
};

export function Modal({ children, onClose, disabledClose = false, ...props }: Props): JSX.Element {
  const close = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      onClose();
    },
    [onClose],
  );

  return (
    <ReactModal isOpen={props.isOpen} className={styled.modal} overlayClassName={styled.overlay}>
      <div className={styled.inner}>
        <div className={styled.mainArea}>{children}</div>
        <div className={styled.footerArea}>
          <Button onClick={close} color='secondary' disabled={disabledClose}>
            キャンセル
          </Button>
          {props.primaryButton && (
            <Button {...props.primaryButton}>{props.primaryButton.children}</Button>
          )}
        </div>
      </div>
    </ReactModal>
  );
}
