import App from "./App";
import { screen } from '@testing-library/react';

describe("Test App.js", () => {
    beforeEach(() => render(<App />))

    it("renders page element", () => {
        const page = screen.getByRole('wrapper',{class: 'page'})
        console.log("page",page)
        expect(page).toBeInTheDocument();
    });
});
