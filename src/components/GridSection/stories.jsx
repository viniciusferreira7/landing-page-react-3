import { GridSection } from '.';
import mock from './mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
};

export const Templetes = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
