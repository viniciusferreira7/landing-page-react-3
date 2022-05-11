import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, erat vitae congue vehicula, odio velit feugiat diam, sed fringilla risus metus sed lectus. Sed ultrices sem erat, non vehicula odio pretium in.',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => <TextComponent {...args} />;
