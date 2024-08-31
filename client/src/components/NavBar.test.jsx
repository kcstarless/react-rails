import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NavBar Component", () => {
  const renderNavBar = () => {
    render(<NavBar />, { wrapper: MemoryRouter });
  }
  
  test("renders both links", () => {
    renderNavBar();
    // expect the links to be there or something
    expect(screen.getByText("Posts list")).toBeInTheDocument();
    expect(screen.getByText("Create New Post")).toBeInTheDocument();
  });
});