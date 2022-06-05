import { screen } from '@testing-library/react';

import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import linksMock from '../NavLinks/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
  srcImage: '',
};

describe('<Menu/>', () => {
  it('should render with default values', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
  });
});
