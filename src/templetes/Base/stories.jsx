import { Base } from '.';
import mock from './mock';

export default {
  title: 'Templetes/Base',
  component: Base,
  args: {
    ...mock,
    children: 'Base',
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
