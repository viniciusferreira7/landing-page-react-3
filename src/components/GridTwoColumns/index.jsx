import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading colorDark={background}>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Heading colorDark={background}>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
