import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test FirstApp', () => {
  const title = 'Hola mundo';
  const subTitle = 'Hola mundo';

  // test('debe hacer match con el snapshot', () => {
  //   const { container } = render(<FirstApp />);
  //   expect(container).toMatchSnapshot();
  // });

  test('Debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(title);
  });

  test('Debe mostrar el subtitulo', () => {
    render(<FirstApp subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(3);
  });
});
