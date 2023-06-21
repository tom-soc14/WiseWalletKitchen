import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";
import Kitchen from '../Kitchen/Kitchen';
import { test, expect } from "@jest/globals";
import { MemoryRouter, Route } from "react-router-dom";



  // ----------- Home page Component Tests



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


  // ----------- Kitchen Component Tests



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

  test("Does the recipe information render?", () => {
    render(
      <MemoryRouter initialEntries={["/kitchen"]}>
        <App />
      </MemoryRouter>
    );
    const recipeRenderTest = screen.getByText("Choose your plan and day...");
    expect(recipeRenderTest).toBeInTheDocument();
  })

  // ----------- Login Component Tests

// We need a way to be able to target the Auth component or test this some other way 

  // test("Does the login page render?", () => {
  //   render(
  //     <MemoryRouter initialEntries={["/login"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //     const loginRenderTest = screen.
  //     expect(loginRenderTest).toBeInTheDocument();
  // })




    // ----------- Wallet Component Tests

    //These tests are only working because we commented out the graph, this package is somehow causing an issue in testing.

    test("Does the Wallet page render?", () => {
      render(
        <MemoryRouter initialEntries={["/wallet"]}>
            <App />
        </MemoryRouter>
      );
      const WalletRenderTest = screen.getByTestId("walletTest");
      expect(WalletRenderTest).toBeInTheDocument();
    })

    test("Does the title on wallet page render", () => {
      render(
        <MemoryRouter initialEntries={["/wallet"]}>
          <App />
        </MemoryRouter>
      )
      const savingstitle = screen.getByText('Savings')
      expect(savingstitle).toBeInTheDocument();
    })

    // test("Does budget input box render", () => {
    //   render(
    //     <MemoryRouter initialEntries={["/wallet"]}>
    //       <App />
    //     </MemoryRouter>
    //   )
    //   const budgetinputbox = getByRole('input');
    //   expect(budgetinputbox).toBeInTheDocument();
    // })

    test("Does Enter your budget render", () => {
      render(
        <MemoryRouter initialEntries={["/wallet"]}>
          <App/>
        </MemoryRouter>
      )
        const budget = screen.getByText('Enter your budget:')
        expect(budget).toBeInTheDocument();
    })

    test("Does the plan selector render?", () => {
      render(
        <MemoryRouter initialEntries={["/wallet"]}>
          <App />
        </MemoryRouter>
      )
      const planSelector = screen.getByTestId('planSelectorTest');
      expect(planSelector).toBeInTheDocument();
    })

    test ("Does the Wallet family selector render?", () => {
      render(
        <MemoryRouter initialEntries={["/Wallet"]}>
          <App />
        </MemoryRouter>
      )
      const familySelector = screen.getByTestId('walletFamilySelectorTest');
      expect(familySelector).toBeInTheDocument();
    })