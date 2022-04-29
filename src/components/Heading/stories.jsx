import { Heading } from '.';
// import { theme } from '../../styles/theme';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Light Text',
    light: false,
  },
  argsTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Dark Text',
  light: true,
};
