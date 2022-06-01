import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
${({ theme }) => css`
    position:fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: 5;
    width:100%;
    height:100%;
    background-color: red;
    border-bottom-color: ${theme.colors.mediumGray};

    > ${SectionContainer}{
      padding-top: 0;
      padding-bottom: 0;
    }
`}
`;

export const MenuContainer = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

 @media ${theme.media.lteMedium} {
    display: block;
    text-align: center;
    padding: ${theme.spacings.xxlarge} 0;
  }

`}`;

export const button = styled.button`
${() => css`
`}`;
