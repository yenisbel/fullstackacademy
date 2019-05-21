// YOUR CODE BELOW

let ticTacToe = {

    board: [[null,null,null],[null,null,null],[null,null,null]],
    move: function (chart, rowNum, colNum) {
        if (this.board[rowNum][colNum] === null){
            this.board[rowNum][colNum] = chart
        }
        return this.board;        
    },
    clear: function() {
        return this.board = [[null,null,null],[null,null,null],[null,null,null]];
    }
}