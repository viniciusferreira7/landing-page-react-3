import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>{children}</Styled.Container>
      <Footer html={footerHtml} />
    </>
  );
};

Base.propTypes = {
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
  children: P.node.isRequired,
};
