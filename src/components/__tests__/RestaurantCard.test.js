import { act, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantCardMockData.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
// import with
//
test("should render RestaurantCard", async () => {
  act(() => [render(<RestaurantCard resData={MOCK_DATA} />)]);

  const headerText = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(headerText).toBeInTheDocument();
});

// test("should render RestaurantCard componnet with promoted label", async () => {
//   await act(() => {
//     render(withPromotedLabel(RestaurantCard));
//   });

//   const promotedLabel = screen.getByText("Promoted");
//   expect(promotedLabel).toBeInTheDocument();
// });
