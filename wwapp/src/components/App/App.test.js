import { render, screen } from '@testing-library/react';
import App from './App';
import {test, expect} from "@jest/globals";
import { MemoryRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Wallet/i);
//   expect(linkElement).toBeInTheDocument();
// });



test('renders <h1> title on home page', () => {
  render(
    <MemoryRouter initalEntries={['/']}>
        <App />
   </MemoryRouter>
  );
  const titleElement = screen.getByText("Welcome to Wise Wallet Kitchen");
  expect(titleElement).toBeInTheDocument();
});

test('Sign up button on Home Page', () => {
  render(
    <MemoryRouter initalEntries={['/']}>
        <App />
   </MemoryRouter>
  );
  const signUpButton = screen.getByTestId('signUpBtn');
  expect(signUpButton).toBeInTheDocument();
});

