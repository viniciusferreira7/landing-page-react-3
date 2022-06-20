import { render, screen } from '@testing-library/react';
import { GridImage } from '.';

describe('<GridImage/>', () => {
  it('should render with default values', () => {
    render(<GridImage>Texto</GridImage>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
