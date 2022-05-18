import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<NavLinks/>', () => {
  it('should render links', () => {
    renderTheme(<NavLinks link={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText('link')).toHaveLength(0);
  });
});
