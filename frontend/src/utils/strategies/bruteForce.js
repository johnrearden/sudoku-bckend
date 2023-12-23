import {
    checkGridLegality,
    getSearchArraysFromGrid
} from "../solver";
import {
    replaceCharAt
} from "../utils";

export const bruteForce = (grid, callback) => {

    // Get list of initial unknown cells
    const initialUnknowns = [];
    for (let i = 0; i < grid.length; i++) {
        if (grid.charAt(i) === '-') {
            initialUnknowns.push(i);
        }
    }
    let searchArrays = getSearchArraysFromGrid(grid);
    callback(grid, searchArrays);

    let startCell = initialUnknowns[0];
    let firstCellSearchArray = [...searchArrays[startCell]];
    console.log('firstCellSearchArray', firstCellSearchArray);

    // A pointer to the current location within the initialUnknowns array.
    let pointer = 0;

    // Main loop - there are 2 halting conditions
    //
    // 1: the first cell in initialUnknows has no more possibilities. We have
    //    backtracked as far as we can go - the puzzle is unsolvable.
    // 2: We've hit the last cell, and it's legal. Puzzle is solved.

    let counter = 0;

    while (searchArrays[initialUnknowns[0]].length > 0) {
        counter++;
        if (counter > 100) {
            break;
        }
        console.log('************************');
        console.log('loop start, iteration', counter);
        
        let currentCell = initialUnknowns[pointer];
        let searchArrays = getSearchArraysFromGrid(grid);
        const candidate = searchArrays[currentCell][0];
        console.log('Currently trying ', candidate, 'in cell', currentCell);
        if (!candidate) {
            console.log('no candidate .');
            continue;
        }
        // If the pointer is zero, remove the candidate from the first cells search array
        if (pointer === 0) {
            firstCellSearchArray = firstCellSearchArray.filter(item => item !== candidate);
            console.log('firstCellSearchArray', firstCellSearchArray);
        }

        // Put the candidate in the grid, and update the searchArrays
        console.log('currentCell : ', currentCell);
        grid = replaceCharAt(grid, currentCell, candidate);
        searchArrays = getSearchArraysFromGrid(grid);
        callback(grid, searchArrays);

        // If the grid is still legal, step forward to the next cell in initialUnknowns
        if (checkGridLegality(grid, searchArrays)) {
            pointer++;
            currentCell = initialUnknowns[pointer];
            console.log('grid is legal, stepping on to cell ', initialUnknowns[pointer]);
            continue;
        }

        // Otherwise, if there is no other value to try in the searchArray for this cell, 
        // step back through the grid
        if (searchArrays[currentCell].length === 0) {
            pointer--;
            currentCell = initialUnknowns[pointer];
            grid = replaceCharAt(grid, currentCell, "-");

            searchArrays = getSearchArraysFromGrid(grid);
            callback(grid, searchArrays);
            console.log('grid is illegal, stepping back to cell ', initialUnknowns[pointer]);
            console.log(initialUnknowns, pointer);
            console.log(searchArrays[initialUnknowns[pointer]]);
            continue;
        }

        console.log('Trying next candidate')
    }

}