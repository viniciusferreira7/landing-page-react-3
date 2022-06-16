import { GridText } from '.';
import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
};

export const Templetes = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
