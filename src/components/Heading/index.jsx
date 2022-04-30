import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

export const Heading = ({ children, colorDark = false }) => {
  return <Styled.Title colorDark={colorDark}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: false,
};
