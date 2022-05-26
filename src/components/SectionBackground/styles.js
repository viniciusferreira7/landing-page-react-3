import styled, { css } from 'styled-components';

const containerBackgroundActive = (theme) => css`
  background:${theme.colors.primaryColor};
  color:${theme.colors.white};
  `;

export const Container = styled.section`
${({ theme, background }) => css`
  background-color:${theme.colors.white};
  color:${theme.colors.primaryColor};
  ${background && containerBackgroundActive(theme)}`}
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
