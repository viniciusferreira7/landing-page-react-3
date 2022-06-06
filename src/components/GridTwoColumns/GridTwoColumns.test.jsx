import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import mock from './mock';

describe('<GridTwoColumns/>', () => {
  it('should render image', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByAltText(/grid/i)).toHaveAttribute(
      'src',
      'assets/images/javascript.svg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
