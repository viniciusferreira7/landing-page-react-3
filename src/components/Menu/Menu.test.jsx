import { screen } from '@testing-library/react';

import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import linksMock from '../NavLinks/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
  srcImage: '',
};

describe('<Menu/>', () => {
  it('should render logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main menu' }));
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile an button for open and close the menu', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
  });
});
