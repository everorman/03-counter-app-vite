import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test FirstApp', () => {
  // test('debe hacer match con el snapshot', () => {
  //   const { container } = render(<FirstApp />);
  //   expect(container).toMatchSnapshot();
  // });

  test('Debe mostrar el titulo en un h1', () => {
    const title = 'Hola mundo';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    const h1 = container.querySelector('h1');
    // expect(getByText(title)).toMatchSnapshot();
    expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe mostrar el subtitulo', () => {
    const subTitle = 'Hola mundo';
    const { getAllByText } = render(<FirstApp subTitle={subTitle} />);

    expect(getAllByText(subTitle).length).toBe(3);
  });
});
