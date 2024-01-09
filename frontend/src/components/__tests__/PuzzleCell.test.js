import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import PuzzleCell from "../PuzzleCell";

describe("PuzzleCell tests", () => {

    test("should render the value prop if value is digit", async() => {
        const value = "1";
        const index = 0;
        const selected = false;
        const warning = false;
        const illegal = false;
        const correct = false;

        render(
            <PuzzleCell value={value} index={index} selected={selected}
                warning={warning} illegal={illegal} correct={correct}/>
        );

        const digitDiv = await screen.findByText(value);
        expect(digitDiv).toBeInTheDocument();
        expect(digitDiv).toHaveTextContent("1");
    });

    test("should render an empty string if value is not digit", async() => {
        const value = "-";
        const index = 0;
        const selected = false;
        const warning = false;
        const illegal = false;
        const correct = false;

        const { container } = render(
            <PuzzleCell value={value} index={index} selected={selected}
                warning={warning} illegal={illegal} correct={correct}/>
        );

        const digitDiv = container.querySelector("[aria-label='puzzle cell']")
        expect(digitDiv).toBeInTheDocument();
        expect(digitDiv).toHaveTextContent("");
    });

    it("should call the handleSelection function prop on user click", async () => {
        const value = "1";
        const index = 0;
        const selected = false;
        const warning = false;
        const illegal = false;
        const correct = false;

        const mockCallback = jest.fn();

        render(
            <PuzzleCell value={value} index={index} selected={selected}
                warning={warning} illegal={illegal} correct={correct}
                handleSelection={mockCallback}/>
        );

        const digitDiv = await screen.findByText(value);
        user.click(digitDiv);

        expect(mockCallback).toHaveBeenCalled();
        expect(mockCallback).toHaveBeenCalledWith(index);
    });
})