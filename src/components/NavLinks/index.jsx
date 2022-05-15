import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ link = ['Menu', 'footer'] }) => {
  return (
    <Styled.Container>
      {link.map((item) => {
        <MenuLink>{item}</MenuLink>;
      })}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  children: P.node.isRequired,
  link: P.array.isRequired,
};
