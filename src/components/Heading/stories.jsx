import { Heading } from '.';
// import { theme } from '../../styles/theme';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argsTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Templete = (args) => <Heading {...args} />;
