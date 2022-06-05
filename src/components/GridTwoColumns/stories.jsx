import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu arcu justo. Donec vel volutpat quam. Phasellus congue nec ligula eget consequat. Aliquam faucibus eu massa non feugiat. Vestibulum sollicitudin dictum volutpat. Quisque faucibus in ex id sagittis. Nullam aliquet dolor sapien, in tristique turpis luctus sit amet. Ut nunc urna, sodales ut faucibus ac, egestas ut dolor. Cras sagittis maximus rhoncus. Duis sed tortor sem.',
    srcImg: 'assets/images/javascript.svg',
    background: true,
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
