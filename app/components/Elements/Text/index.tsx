import React from 'react';
import * as styled from './style.css';
type Props = {
  children: React.ReactNode;
};
export const Text: React.FC<Props> = ({ children }) => {
  return <p className={styled.text}>{children}</p>;
};
