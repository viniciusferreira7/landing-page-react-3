import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Ola mundo" />);

    expect(screen.getByRole('link', { name: /mun/i })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo" srcImage="image.gif" />,
    );

    expect(screen.getByRole('img', { name: /Ola/i })).toHaveAttribute(
      'src',
      'image.gif',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<LogoLink link="#target" text="Ola mundo" />);

    const { container } = screen.getByRole('link', { name: /Ola/i });

    expect(container).toMatchSnapshot();
  });
});
