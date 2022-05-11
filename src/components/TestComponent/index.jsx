import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const TestComponent = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

TestComponent.propTypes = {
  children: P.node.isRequired,
};
