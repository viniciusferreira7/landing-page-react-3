import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'Light Text',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => <TextComponent {...args} />;
