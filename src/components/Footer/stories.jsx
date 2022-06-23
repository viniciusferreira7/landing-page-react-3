import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
