import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridContent/>', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(screen);
    expect(container).toMatchSnapshot();
  });
});
