import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent/>', () => {
  it('should render correctly text', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    const text = screen.getByText('Texto');
    expect(text).toBeInTheDocument();
  });
  it('should only paragraph', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    const text = screen.getByText('Texto');
    expect(text.tagName.toLowerCase()).toBe('p');
  });

  it('should march snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <p
        class="c0"
      >
        Texto
      </p>
    `);
  });
});
