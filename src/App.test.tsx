import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("WHEN button is clicked THEN products are shown", async () => {
    // GIVEN
    render(<App />);

    // WHEN
    const button = screen.getByText("Fetch products");
    fireEvent.click(button);

    await waitFor(() => new Promise((res) => setTimeout(res, 500)));

    // THEN
    const tshirt = await screen.findByText("T-Shirt");
    const suit = await screen.findByText("Suit");
    expect(tshirt).toBeInTheDocument();
    expect(suit).toBeInTheDocument();
  });
});
