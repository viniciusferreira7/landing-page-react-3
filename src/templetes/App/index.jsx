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

export const Container2 = styled(Container).attrs({ as: 'table' })`
  ${(props) => css`
    background: ${props.theme.colors.moreBg};
  `}
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
      </Container2>
    </div>
  );
}

export default Home;
