import { render, screen } from '@testing-library/react';
import { Menu } from '.';

describe('<Menu/>', () => {
  it('should render with default values', () => {
    render(<Menu>Texto</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
