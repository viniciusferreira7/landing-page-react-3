import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
