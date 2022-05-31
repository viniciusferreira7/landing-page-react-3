import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Menu = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
};
