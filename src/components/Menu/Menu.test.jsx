import { screen } from '@testing-library/react';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import { renderTheme } from '../../styles/render-theme';

const logoData = [
  {
    text: 'Logo',
    link: '#target',
    srcImage: '',
  },
];

describe('<Menu/>', () => {
  it('should render with default values', () => {
    renderTheme(<Menu link={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
  });
});
