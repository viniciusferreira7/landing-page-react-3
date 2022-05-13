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
});
