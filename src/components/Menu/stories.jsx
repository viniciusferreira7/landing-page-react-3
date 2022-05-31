import { Menu } from '.';

import linkMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linkMock,
    logoData: {
      text: 'Menu',
      link: '#target',
      srcImage: '',
    },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
