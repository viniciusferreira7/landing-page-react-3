import React from 'react';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';

export const GoTop = () => {
  return (
    <Styled.Container href="#" arial-label="Go to Top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
