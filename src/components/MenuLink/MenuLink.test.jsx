import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink/>', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Texto</MenuLink>);
    expect(screen.getByRole('link', { name: 'Texto' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render open a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Texto
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Texto' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
  it('should match snapshot', () => {
    renderTheme(<MenuLink link="http://localhost">Texto</MenuLink>);
    expect(screen.getByRole('link', { name: 'Texto' })).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-size: 1.6rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        padding: 2.4rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 1.3rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Texto
      </a>
    `);
  });
});
