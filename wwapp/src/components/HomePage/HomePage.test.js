import { render, screen } from '@testing-library/react';
import HomePage from "./HomePage.js";
import { test, expect } from "@jest/globals";
import { MemoryRouter } from "react-router-dom";

test('renders title on home page', () => {
  render (
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>
  );
  const titleElement = screen.getByText("Welcome to Wise Wallet Kitchen");
  expect(titleElement).toBeInTheDocument();
});
