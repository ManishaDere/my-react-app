import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);
  //assertion
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});

it("should render Header component with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText(/Cart/);
  expect(cartText).toBeInTheDocument();
});
