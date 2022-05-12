import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Light Text',
    link: 'https://www.google.com/',
  },
  argsTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
