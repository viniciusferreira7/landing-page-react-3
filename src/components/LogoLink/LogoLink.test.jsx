import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo">
        Texto
      </LogoLink>,
    );

    const heading = screen.getByRole('heading', { name: 'Ola mundo' });
    screen.debug();
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo" srcImage="image.gif">
        Texto
      </LogoLink>,
    );

    expect(screen.getByRole('img', { name: /Ola/i })).toHaveAttribute(
      'src',
      'image.gif',
    );
  });
});
