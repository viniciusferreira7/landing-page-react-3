import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridContent/>', () => {
  it('should render with default values', () => {
    renderTheme(<GridContent>Texto</GridContent>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
