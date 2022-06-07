import { GridContent } from '.';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};

export const Templetes = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
