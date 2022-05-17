import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    link: links,
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
