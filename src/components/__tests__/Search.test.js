import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/ResItemsList.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeAll(() => {
  // console.log("Before everything");
});

beforeEach(() => {
  // console.log("before each test case");
});

afterAll(() => {
  // console.log("after all test case");
});

afterEach(() => {
  // console.log("after each test case");
});

test("should render Restaurant Cards component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantCards />
        </BrowserRouter>
      </Provider>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const inputBox = screen.getByTestId("search-input");
  expect(searchBtn).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();

  fireEvent.change(inputBox, { target: { value: "Burger" } });

  fireEvent.click(searchBtn);

  const RestaurantCard = screen.getAllByTestId("RestaurantCard");
  expect(RestaurantCard.length).toBe(4);
});

test("should filter top rated rsetaurants", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantCards />
        </BrowserRouter>
      </Provider>
    )
  );

  const RestaurantCard = screen.getAllByTestId("RestaurantCard");
  expect(RestaurantCard.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardAfterFiletr = screen.getAllByTestId("RestaurantCard");
  expect(cardAfterFiletr.length).toBe(13);
});
