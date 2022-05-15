import { NavLinks } from '.';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    children: 'NavLinks',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
