import { render, screen } from "@testing-library/react";
import App from "./App";
import Kitchen from '../Kitchen/Kitchen';
import { test, expect } from "@jest/globals";
import { MemoryRouter, Route } from "react-router-dom";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Wallet/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders <h1> title on home page", () => {
  render(
    <MemoryRouter initalEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const titleElement = screen.getByText("Welcome to Wise Wallet Kitchen");
  expect(titleElement).toBeInTheDocument();
});

test("Sign up button on Home Page", () => {
  render(
    <MemoryRouter initalEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const signUpButton = screen.getByTestId("signUpBtn");
  expect(signUpButton).toBeInTheDocument();
});

test("Does the Navbar render on the HomePage", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const navbarrender = screen.getByTestId("navbartest");
  expect(navbarrender).toBeInTheDocument();
});

test("Does image carousel render on the HomePage", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  ); const imagecarousel = screen.getByTestId("imagecarouseltest");
  expect(imagecarousel).toBeInTheDocument();
})


test("Does the Kitchen component render?", () => {
  render(
    <MemoryRouter initialEntries={["/kitchen"]}>
      <App />
    </MemoryRouter>
  );
  const kitchenComponent = screen.getByTestId("kitchenComponentTest");
  expect(kitchenComponent).toBeInTheDocument();
})

test("Does the day selector render?", () => {
  render(
    <MemoryRouter initialEntries={["/kitchen"]}>
      <App />
    </MemoryRouter>
  );
    const daySelectorComponent = screen.getByTestId("daySelectorComponentTest");
    expect(daySelectorComponent).toBeInTheDocument();
  })

  test("Does family selector buttons render?", () => {
    render(
      <MemoryRouter initialEntries={["/kitchen"]}>
        <App />
      </MemoryRouter>
    );
    const familyselectortest = screen.getByTestId("familyselectortest")
    expect(familyselectortest).toBeInTheDocument();
  })

  test("Does recipe plan selector buttons render?", () => {
    render(
      <MemoryRouter initialEntries={["/kitchen"]}>
        <App />
      </MemoryRouter>
    );
    const recipeplanselectortest = screen.getByTestId("recipeplanselectortest")
    expect(recipeplanselectortest).toBeInTheDocument();
  })