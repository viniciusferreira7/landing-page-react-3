import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';

export const GridSection = ({ children }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading />
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  children: P.node.isRequired,
};
