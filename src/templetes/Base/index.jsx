import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  links,
};
