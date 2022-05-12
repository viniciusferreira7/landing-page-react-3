import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
font-size: ${theme.font.sizes.small};
text-decoration: none;
padding:${theme.spacings.huge};
color:${theme.colors.primaryColor};`}
background-color: red;
`;
