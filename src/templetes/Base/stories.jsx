import { Base } from '.';
import mock from '../../components/NavLinks/mock';

export default {
  title: 'Templetes/Base',
  component: Base,
  args: {
    links: mock,
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
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
