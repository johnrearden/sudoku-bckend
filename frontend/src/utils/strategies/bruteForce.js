import {
    checkGridLegality,
    getSearchArraysFromGrid
} from "../solver";
import {
    replaceCharAt
} from "../utils";

export const bruteForce = (grid, callback) => {

    // Create a stack to hold objects representing a guess - 
    const stack = [];

    // Get list of initial unknown cells
    const initialUnknowns = [];
    for (let i = 0; i < grid.length; i++) {
        if (grid.charAt(i) === '-') {
            initialUnknowns.push(i);
        }
    }
    let searchArrays = getSearchArraysFromGrid(grid);

    let startCell = initialUnknowns[0];
    let firstStackItem = {
        cellIndex: startCell,
        usedDigits: [],
        prevCellIndex: null,
    }
    stack.push(firstStackItem);

    // A pointer to the current location within the initialUnknowns array.
    let pointer = 0;

    // Main loop - there are 2 halting conditions
    //
    // 1: the first cell in initialUnknows has no more possibilities. We have
    //    backtracked as far as we can go - the puzzle is unsolvable.
    // 2: We've hit the last cell, and it has only one candidate. Puzzle is solved.

    let counter = 0;

    while (searchArrays[initialUnknowns[0]].length > 0) {
        if (counter++ > 100) {
            break;
        }

        // Grab the top item on the stack, and get the remaining candidates
        const stackItem = stack[stack.length - 1];
        const cellIndex = stackItem.cellIndex;
        const srcArray = [...searchArrays[cellIndex]];
        const candidates = srcArray.filter(digit => !stackItem.usedDigits.includes(digit));

        // First halting condition - no candidates remain for first cell - unsolvable puzzle
        if (!stackItem.prevCellIndex && !candidates?.length) {
            console.log("Puzzle has no solution!");
            break;
        }

        // Second halting condition - the last cell has only one candidate remaining - puzzle solved!
        if (cellIndex === initialUnknowns.length - 1 && candidates.length === 1) {
            grid = replaceCharAt(grid, cellIndex, candidates[0]);
            callback(grid, searchArrays);
            console.log("Puzzle solved!!!!!");
        }

        // If there is a candidate for this cell, set it, and create a new stackItem.
        if (candidates.length)
    }

}