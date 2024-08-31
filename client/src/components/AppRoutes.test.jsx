import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  AppRoutes  from "./AppRoutes";
import { testEnvironment } from "../../jest.config.cjs";

// Mock the PostsList component
jest.mock("../features/posts/PostsList", () => {
    return () => <div>Your Matcher for PostsList component here</div>;
});

jest.mock("../features/posts/PostsDetails", () => {
    return () => <div>Your Matcher for PostsDetails component here</div>;
});

jest.mock("../features/posts/NewPostForm", () => {
    return () => <div>Your Matcher for NewPostForm component here</div>;
});

jest.mock("../features/posts/PostEditForm", () => {
    return () => <div>Your Matcher for EditPostForm component here</div>;
});

// Mock constants
jest.mock("../../constants", () => ({
    API_URL: "http://localhost:3000",
}));

describe("AppRoutes Component", () => {
    const renderWithRouter = (ui, { initialEntries = ["/"] } = {}) => {
        return render(ui,  {
            wrapper: ({ children }) => (<MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>)
        });
    };

    test("root path renders PostsList", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/"] });
        const expectedText = "Your Matcher for PostsList component here";
        // Adjust the text matcher to match what `PostsList` renders
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test("post details path renders PostsDetails", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/posts/1"] });
        const expectedText = "Your Matcher for PostsDetails component here";
        // Adjust the text matcher to match what `PostsDetails` renders
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test("post details path renders PostsDetails", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/new"] });
        const expectedText = "Your Matcher for NewPostForm component here";
        // Adjust the text matcher to match what `PostsDetails` renders
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test("post details path renders EditPostForm", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/posts/1/edit"] });
        const expectedText = "Your Matcher for EditPostForm component here";
        // Adjust the text matcher to match what `PostsDetails` renders
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
});
