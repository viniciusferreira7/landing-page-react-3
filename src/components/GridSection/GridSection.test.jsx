import { GridSection } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridSection/>', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridSection {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
