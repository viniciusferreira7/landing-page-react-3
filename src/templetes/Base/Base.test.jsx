import { render, screen } from '@testing-library/react';
import { Base } from '.';

describe('<Base/>', () => {
  it('should render with default values', () => {
    render(<Base>Texto</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
