// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    let twoDimensGrid = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 1; j <= numColumns; j++) {
            row.push(j);
        }
        twoDimensGrid.push(row);
    }
    return twoDimensGrid;
}


/* Using a helper to create a cell at a time
with  x:row and y:column
function addCell(x, y) {
    map[x] = map[x] || [];  
    map[x][y] = x + '|' + y;
*/