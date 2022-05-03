import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home>', () => {
  it('should render Home', () => {
    renderTheme(<Home />);
  });
});

test('renders learn react link', () => {
  renderTheme(<Home />);
});
