import { GridTwoColumns } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
};

export const Templetes = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
