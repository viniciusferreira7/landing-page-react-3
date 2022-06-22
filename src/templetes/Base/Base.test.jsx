import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';

describe('<Base/>', () => {
  it('should render with default values', () => {
    renderTheme(<Base>Texto</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
