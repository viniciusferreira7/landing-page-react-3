import { SectionBackground } from '.';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: 'SectionBackground',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
