import styled, { css } from 'styled-components';

export const titleSize = {
  small: ({ theme }) =>
    css`
      ${theme.font.size.small}
    `,
  medium: ({ theme }) => css``,
  big: ({ theme }) => css``,
};

export const Title = styled.h1`
  ${({ theme, colorDark, size }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size]()}
  `}
`;
