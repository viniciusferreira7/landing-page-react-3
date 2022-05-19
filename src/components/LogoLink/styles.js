import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
background-color:${theme.colors.primaryColor};`}
`;
