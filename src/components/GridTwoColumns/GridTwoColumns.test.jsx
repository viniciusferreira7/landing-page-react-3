import { render, screen } from '@testing-library/react';
import { GridTwoColumns } from '.';

describe('<GridTwoColumns/>', () => {
  it('should render with default values', () => {
    render(<GridTwoColumns>Texto</GridTwoColumns>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
