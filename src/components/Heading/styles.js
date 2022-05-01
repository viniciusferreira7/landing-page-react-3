import styled, { css } from 'styled-components';

export const titleSize = {
  small: (theme) =>
    css`
      font-size: ${theme.font.sizes.medium};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.font.sizes.large};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.font.sizes.xlarge};
    `,
  huge: (theme) =>
    css`
      font-size: ${theme.font.sizes.huge};
    `,
};

export const Title = styled.h1`
  ${({ theme, colorDark, size }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)};
  `}
`;
