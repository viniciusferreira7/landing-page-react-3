import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<NavLinks/>', () => {
  it('should render links', () => {
    renderTheme(<NavLinks link={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('should not render links', () => {
    renderTheme(<NavLinks link={[]} />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it('should render NavLink, width 768px', () => {
    renderTheme(<NavLinks link={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks link={[]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
