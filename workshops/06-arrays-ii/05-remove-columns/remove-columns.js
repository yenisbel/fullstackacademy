// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
    let resultGrid = [];
    for (let i = 0; i < originalGrid.length; i++) {
        let row = originalGrid[i];
        for (let j = 1; j <= numColumns; j++) {
            row.pop(j);
        }
        resultGrid.push(row);
    }
    return resultGrid;
}