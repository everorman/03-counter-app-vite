import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test FirstApp', () => {
  test('debe hacer match con el snapshot', () => {
    render(<FirstApp />);
  });
});
