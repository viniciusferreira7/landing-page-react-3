import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <h2>Hello</h2>
        <Heading>O texto que eu quero</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
