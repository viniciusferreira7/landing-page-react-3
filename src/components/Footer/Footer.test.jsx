import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html="<h1>Texto</h1>" />);
    expect(screen.getByRole('heading', { name: 'Texto' }));
    expect(container).toMatchSnapshot();
  });
});
