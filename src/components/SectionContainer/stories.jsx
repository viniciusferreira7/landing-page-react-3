import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: 'SectionContainer',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
