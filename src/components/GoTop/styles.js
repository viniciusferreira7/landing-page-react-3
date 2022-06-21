import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
  background-color:${theme.colors.primaryColor};
  color:${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width:4rem;
  height:4rem;
  border-radius: 2rem;
  z-index: 6;
  cursor: pointer;
  opacity: 0.7;
`}
`;
