import { render, screen } from '@testing-library/react';
import App from './App';

test('accueil', () => {
  render(<App />);
  const linkElement = screen.getByText(/accueil/i);
  expect(linkElement).toBeInTheDocument();
});
