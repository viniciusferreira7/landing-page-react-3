import { TestComponent } from '.';

export default {
  title: 'TestComponent',
  component: TestComponent,
  args: {
    children: 'Light Text',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  <div>
    <TestComponent {...args} />
  </div>;
};
