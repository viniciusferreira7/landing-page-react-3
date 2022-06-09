import styled, { css } from 'styled-components';
import { Heading as HeadingContainer } from '../Heading';
export const Container = styled.div`
${() => css``}
`;

export const Grid = styled.div`
${() => css`
  counter-reset: grid-counter;
`}
`;

export const GridElement = styled.div`
${() => css`
  ${HeadingContainer}{
    position: relative;
    left:5rem;
  }

  ${HeadingContainer}::before{
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;

  }
`}
`;
