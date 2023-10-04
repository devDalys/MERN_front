import * as React from 'react';
import {createPortal} from 'react-dom';
import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  canBeClosed?: boolean;
}

export const Modal: React.FC<Props> = ({children, isOpen, canBeClosed}) => {
  if (isOpen)
    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal}>{children}</div>
      </div>,
      document.body,
    );
};
