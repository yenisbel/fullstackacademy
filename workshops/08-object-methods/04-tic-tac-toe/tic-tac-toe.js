// YOUR CODE BELOW

let ticTacToe = {

    board: [[null,null,null],[null,null,null],[null,null,null]],
    move: function (chart, rowNum, colNum) {
        console.log(this.board);
        if (rowNum === 0 && colNum === 0){
            return this.board
        }
        if (this.board[rowNum][colNum] === null) return this.board[rowNum][colNum] = chart ;
        
    },
    clear: function () {
        return this.board = [[null,null,null],[null,null,null],[null,null,null]];
    }
}