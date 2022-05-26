import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<SectionBackground/>', () => {
  it('should render SectionBackground ', () => {
    renderTheme(<SectionBackground>Texto</SectionBackground>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should render SectionBackground ', () => {
    renderTheme(<SectionBackground background>Texto</SectionBackground>);
    const { container } = screen.getByText('Texto');
    expect(container).toHaveStyle(`background: ${theme.colors.primaryColor}`);
  });
});
