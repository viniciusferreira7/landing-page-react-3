import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <GoTop />
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
