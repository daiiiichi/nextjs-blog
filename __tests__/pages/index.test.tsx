import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index";

describe("Home Page", () => {
  it("リンクページを持つ", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: "First Post" });
    expect(link).toBeInTheDocument();
  });
});
