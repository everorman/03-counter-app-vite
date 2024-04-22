import { CounterApp } from '../src/CounterApp';
import { render, screen, fireEvent, getByText } from '@testing-library/react';

describe('CounterApp', () => {
  const initialValue = 100;
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());
  });
  test('Debe incrementar 1 al hacer click', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });
  test('Debe decrementar 1 al hacer click', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  });
  test('Debe implementar el restart', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('100')).toBeTruthy();
  });
});
