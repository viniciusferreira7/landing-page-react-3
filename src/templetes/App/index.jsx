import * as Styled from './styles';
import styled from 'styled-components';
import { css } from 'styled-components';

export const changeBackground = (theme) =>
  css`
    color: ${theme};
  `;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    ${changeBackground(theme.colors.secondaryBg)}
  `}
`;

export const Heading = styled.h1`
  color: lightgoldenrodyellow;
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  ${(props) => css`
    background: ${props.theme.colors.moreBg};
  `}

  > ${Heading} {
    color: lightseagreen;
  }
  ${Heading} {
    color: darkgoldenrod;
  }
`;

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <h2>Hello</h2>
      </Styled.Wrapper>
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nunc et purus eleifend interdum. Integer
          eget sapien nisl. Duis aliquet tincidunt finibus. Vestibulum vel mi a dolor finibus mattis eu at justo. Nulla
          rutrum dignissim tortor sed finibus
        </p>
      </Container>
      <Container2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nunc et purus eleifend interdum. Integer
          eget sapien nisl. Duis aliquet tincidunt finibus. Vestibulum vel mi a dolor finibus mattis eu at justo. Nulla
          rutrum dignissim tortor sed finibus
        </p>
        <Heading>Hello</Heading>
      </Container2>
    </div>
  );
}

export default Home;
