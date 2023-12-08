import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ContactUs from "../ContactUs";

describe("Contact Us Page test cases", () => {
  it("should load Contact us component", async () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", async () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load both input boxes in contact component", async () => {
    render(<ContactUs />);
    // querying
    const inputs = screen.getAllByRole("textbox");

    // assertions
    expect(inputs.length).toBe(2);
    expect(inputs.length).not.toBeGreaterThan(2);
  });
});
