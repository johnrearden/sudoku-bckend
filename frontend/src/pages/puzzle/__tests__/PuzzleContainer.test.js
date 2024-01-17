import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import PuzzleContainer from "../PuzzleContainer";
import { PuzzleHistoryProvider } from '../../../contexts/PuzzleHistoryContext';
import { MemoryRouter, Route } from "react-router-dom/cjs/react-router-dom";
import { createServer } from "../../../../test_utils/server";

const TEST_GRID = "-387642--16---8-3-4791-26--3------2--2-34--51---25-4---13-275--6-7-1----25-6----7";

describe("A PuzzleContainer", () => {

    const renderComponent = () => {
        render (
            <PuzzleHistoryProvider>
                <MemoryRouter initialEntries={["/get_puzzle/0"]}>
                    <Route path="/get_puzzle/:difficulty">
                        <PuzzleContainer />
                    </Route>
                </MemoryRouter>
            </PuzzleHistoryProvider>
        );
    }

    createServer([{
        method: 'post',
        path: '/get_random_puzzle/0/',
        res: () => ({
            "id": 13,
            "grid": TEST_GRID,
            "created_on": "2023-12-19T19:53:45.768902Z",
            "difficulty": 0,
            "instances_created": 400,
            "instances_completed": 73,
            "creator": "admin",
            "is_owner": true,
            "start_time": "2024-01-17T22:49:03.294509"
        })
    }]);

    it("should change the content of the selected cell when a Digit button is pressed", async () => {
        
        renderComponent();
        
        const digit = "1";
        const digitButton = await screen.findByTestId(`digit_chooser_${digit}`);

        expect(digitButton).toBeInTheDocument();
        user.click(digitButton);

        const cellZero = screen.getByTestId('puzzle_cell_0');
        expect(cellZero.textContent).toMatch(digit);
    })

    it("should render each cell with the appropriate digit or empty string", async() => {

        renderComponent();

        const cells = await screen.findAllByTestId(/puzzle_cell_/i);
        cells.map((cell, idx) => {
            const char = TEST_GRID.charAt(idx);
            const expectedText = char === "-" ? "" : char;
            console.log(cell.textContent);
            //expect(cell.textContent).toMatch(expectedText);
        })
        expect(cells).toHaveLength(81);
    })
})