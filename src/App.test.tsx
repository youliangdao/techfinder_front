import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('h1が存在するかどうか', () => {
  render(<App />);
  // const h1El = screen.getByText('Hello World');
  // expect(h1El).toBeInTheDocument();
});
