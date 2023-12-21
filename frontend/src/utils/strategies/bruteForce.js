export const bruteForce = (grid, searchArray, callback) => {
    // Get list of initial unknown cells
    const initialUnknowns = [];
    for (let i = 0; i < grid.length; i++) {
        if (grid.charAt(i) === '-') {
            initialUnknowns.push(i);
        }
    }
    console.log(initialUnknowns);
}