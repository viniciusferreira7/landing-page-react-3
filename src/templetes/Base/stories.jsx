import { Base } from '.';
import mock from '../../components/NavLinks/mock';

export default {
  title: 'Templetes/Base',
  component: Base,
  args: {
    children: 'Base',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
