import { Base } from '.';
import mock from './mock';

export default {
  title: 'Templetes/Base',
  component: Base,
  args: {
    ...mock,
    children: 'Base',
    footerHtml: '<p>Teste do Footer</p>',
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
