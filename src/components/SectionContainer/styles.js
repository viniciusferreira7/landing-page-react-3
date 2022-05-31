import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacings.large};
`}
`;
