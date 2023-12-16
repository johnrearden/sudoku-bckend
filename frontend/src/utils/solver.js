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
    let counter = 0;
    while (!complete && counter < 10) {
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
                callback(grid);
            } else {
                complete = false;
            }
            counter++;
            console.log("*************************** " + counter);
            
        }
    }
}

export const checkNonets = (grid) => {
    // List the cell addresses in each of the 27 nonets
    const nonets = new Array(27);
    for (let i = 0; i < 27; i++) {
        nonets[i] = [];
    }
    console.log(nonets);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            nonets[i].push(j + i * 9); // rows
            nonets[i + 9].push(j * 9 + i); // cols
        }
    }

    // Squares
    const squareCorners = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    for (let i = 0; i < 9; i++) {
        const init = squareCorners[i];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                nonets[18 + i].push(init + j * 9 + k);
            }
        }
    }

    for (let i = 0; i < 27; i++) {
        console.log(nonets[i]);

    }

    // Identify the digits missing from each nonet.

    // List the unknown cells in each nonet

    // Check each unknown cell. If any missing digit occurs only in one cell, 
    // that cell is now known.
}