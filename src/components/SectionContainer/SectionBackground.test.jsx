import { render, screen } from '@testing-library/react';
import { SectionContainer } from '.';

describe('<SectionContainer/>', () => {
  it('should render with default values', () => {
    render(<SectionContainer>Texto</SectionContainer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
