import {
    checkGridLegality,
    getSearchArraysFromGrid
} from "../solver";
import {
    replaceCharAt
} from "../utils";

export const bruteForce = async (grid, callback) => {

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

    let firstStackItem = {
        unknownsIndex: 0,
        usedDigits: [],
        prevCellIndex: null,
    }
    stack.push(firstStackItem);

    // Main loop - there are 2 halting conditions
    //
    // 1: the first cell in initialUnknows has no more possibilities. We have
    //    backtracked as far as we can go - the puzzle is unsolvable.
    // 2: We've hit the last cell, and it has only one candidate. Puzzle is solved.

    let counter = 0;

    while (true) {
        if (counter++ > 100) {
            break;
        }
        
        //Temp pause:
        await delay(1000);
        

        console.log("start of iteration", counter, "****************");

        // Grab the top item on the stack, and get the remaining candidates

        const stackItem = stack[stack.length - 1];
        console.log("current top of stack : cell", initialUnknowns[stackItem.unknownsIndex], stackItem.usedDigits);

        const unknownsIndex = stackItem.unknownsIndex;
        const cellIndex = initialUnknowns[stackItem.unknownsIndex];
        searchArrays = getSearchArraysFromGrid(grid);
        const srcArray = [...searchArrays[cellIndex]];
        console.log("unfiltered SA :", searchArrays[cellIndex], grid);
        const candidates = srcArray.filter(digit => !stackItem.usedDigits.includes(digit));
        console.log("candidates: ", candidates, "usedDigits", stackItem.usedDigits);

        //await waitingKeypress();

        // First halting condition - no candidates remain for first cell - unsolvable puzzle
        if (!stackItem.prevCellIndex && !candidates?.length) {
            console.log("Puzzle has no solution!");
            break;
        }

        // Second halting condition - the last cell has only one candidate remaining - puzzle solved!
        if (unknownsIndex === initialUnknowns.length - 1 && candidates.length === 1) {
            grid = replaceCharAt(grid, cellIndex, candidates[0]);
            callback(grid, searchArrays);
            console.log("Puzzle solved!!!!!");
            break;
        }

        // If there is a candidate for this cell, set it, and create a new stackItem.
        if (candidates?.length) {
            const candidate = candidates[0];
            grid = replaceCharAt(grid, cellIndex, candidate);
            stackItem.usedDigits.push(candidate);
            console.log('Candidates: ', candidates, 'Added', candidate, 'to cell', cellIndex);
            searchArrays = getSearchArraysFromGrid(grid);
            callback(grid, searchArrays);

            // Check for grid legality - if illegal, remove candidate from grid and add it to usedDigits
            if (!checkGridLegality(grid, searchArrays)) {
                console.log('grid is illegal now, removing char in cell', cellIndex);
                grid = replaceCharAt(grid, cellIndex, "-");
                searchArrays = getSearchArraysFromGrid(grid);
                callback(grid, searchArrays);
                continue;
            }

            // Grid is still legal. Create a new stack item, and continue
            const newStackItem = {
                unknownsIndex: unknownsIndex + 1,
                usedDigits: [],
                prevCellIndex: unknownsIndex,
            }
            console.log('grid still legal - moving on to cell', initialUnknowns[unknownsIndex + 1]);
            stack.push(newStackItem);
            continue;
        } else {
            // This cell can't be filled - got to backtrack.
            stack.pop();
            console.log('before backtrack:', searchArrays[cellIndex]);
            grid = replaceCharAt(grid, cellIndex, "-");
            searchArrays = getSearchArraysFromGrid(grid);
            console.log('after backtrack:', searchArrays[cellIndex]);
            callback(grid, searchArrays);
            console.log('No candidates for cell', cellIndex, 'backing up');
            continue;
        }
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitingKeypress() {
    return new Promise((resolve) => {
      document.addEventListener('keydown', onKeyHandler);
      function onKeyHandler(e) {
        document.removeEventListener('keydown', onKeyHandler);
        resolve();
      }
    });
  }