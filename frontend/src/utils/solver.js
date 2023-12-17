import {
    getColumn,
    getRow,
    getSquare,
    replaceCharAt
} from "./utils"
import {
    nonets
} from "../constants/nonets";

export const solvePuzzle = (currentGrid, callback) => {

    // Create a copy of the grid, to avoid mutating state directly.
    let grid = currentGrid.slice();

    // Create array listing unsolved cells
    //const unsolvedIndices = new Array(81).fill(true);

    // Create search array
    const searchArray = new Array(81);
    for (let i = 0; i < 81; i++) {
        searchArray[i] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }

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
            grid = replaceCharAt(grid, i, searchArray[i][0]);
            console.log('process of elimination, putting', searchArray[i][0], 'in', i);
            console.log(grid);
            callback(grid);
            return;
        } else {
            console.log('No progress with method 1');
        }
    }

    //return;

    // Check nonets.

    for (let n = 0; n < nonets.length; n++) {
        let nonet = nonets[n];
       // console.log('88888888888    nonet' + n + '    88888888888888')

        // Identify the digits missing from each nonet, and list the unknown cells
        let missingDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const existingDigits = [];
        const unknownCells = [];
        for (let cell of nonet) {
            existingDigits.push(grid.charAt(cell));
            if (grid.charAt(cell) === "-") {
                unknownCells.push(cell);
            }
            //console.log(existingDigits);
        }
        missingDigits = missingDigits.filter(digit => !existingDigits.includes(digit));
        //console.log('missingDigits', JSON.stringify(missingDigits, null, 2))
        //console.log('unknownCells', JSON.stringify(unknownCells, null, 2))

        // Check each unknown cell. If any missing digit occurs only in one cell, 
        // that cell is now known.

        // number of times each missingDigit occurs in the unknown cells
        const occurencesCount = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
        };

        // the last occurence (only occurence if count is 1) of the missing digit.
        const lastOccurence = {};

        for (let cell of unknownCells) {
            //console.log('working on cell', cell);
            const missingFromCell = searchArray[cell];
            //console.log('missingFromCell', cell, JSON.stringify(missingFromCell, null, 2));
            for (let digit of missingDigits) {
                //console.log(digit, 'in missingFromCell', missingFromCell.includes(digit));
                if (missingFromCell.includes(digit)) {
                    //console.log(digit + ' missing from ' + cell);
                    const newCount = occurencesCount[digit] + 1;
                    occurencesCount[digit] = newCount;
                    lastOccurence[digit] = cell;
                }
            }
        }

        //console.log('occurencesCount', JSON.stringify(occurencesCount, null, 2));
        //console.log('lastOccurence', JSON.stringify(lastOccurence, null, 2));

        for (let [digit, count] of Object.entries(occurencesCount)) {
            if (count === 1) {
                const cell = lastOccurence[digit];
                console.log(digit, 'only occurs once in cell', cell, 'returning');
                grid = replaceCharAt(grid, cell, digit);
                callback(grid);
                return;
            }
        }
    }

    console.log('No progress with method 2..............................');
}