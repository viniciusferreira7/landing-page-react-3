import styled, { css } from 'styled-components';

export const Container = styled.p`
${({ theme }) => css`
background-color:${theme.colors.white};
color: ${theme.font.sizes.xhuge}`}

`;
