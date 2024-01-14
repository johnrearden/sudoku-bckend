import { render, screen } from "@testing-library/react";
import Puzzle from "../Puzzle";

const SAMPLE_GRID = "25------4----5---9-8-3--25---------2-3---7---8---4-16-1---6-58--------9---64-----";

describe("A Puzzle component", () => {

    it("should render a cell for each character in the grid prop", () => {
        render(
            <Puzzle/>
        )
    })
})