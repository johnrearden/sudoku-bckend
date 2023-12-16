import { getColumn, getRow, getSquare, replaceCharAt } from "./utils"

export const solvePuzzle = (currentGrid, callback) => {

    // Create a copy of the grid, to avoid mutating state directly.
    let grid = currentGrid.slice();

    // Create array listing unsolved cells
    const unsolvedIndices = new Array(81).fill(true);
    
    // Create search array
    const searchArray = new Array(81).fill([]);
    for (let i = 0; i < 81; i++) {
        searchArray[i] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }

    let complete = false;
    while (!complete) {
        complete = true;
        for (let i = 0; i < 81; i++) {
            if (searchArray[i].length === 0) {
                continue;
            }
            const row = getRow(i).filter((item) => item !== i);
            const col = getColumn(i).filter((item) => item !== i);
            const square = getSquare(i).filter((item) => item !== i);

            // Get set of cellIndices in row/col/square combination
            const concat = [...row, ...col, ...square];
            const cellIndices = new Set(concat);
            const existingDigits = new Set();
            for (const index of cellIndices) {
                const digit = grid.charAt(index);
                existingDigits.add(digit);
            }
            
            searchArray[i] = searchArray[i].filter((item) => !existingDigits.has(item));
            if (searchArray[i].length === 1) {
                grid = replaceCharAt(grid, i, searchArray[i][0])
                console.log(grid);
            }
        }
    }
}