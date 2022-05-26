import { render, screen } from '@testing-library/react';
import { SectionBackground } from '.';

describe('<SectionBackground/>', () => {
  it('should render with default values', () => {
    render(<SectionBackground>Texto</SectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
