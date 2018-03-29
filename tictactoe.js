// Tic-Tac-Toe starter code for BHS class

var player = "X";
var board = [];
// Initialize board to a 2D array of empty strings, 3x3
for (var row = 0; row < 3; row++) {
    var cols = [];
    for (var col = 0; col < 3; col++) {
        cols.push("");
    }
    board.push(cols);
}

// Handles click by current player of row and col
var handleClick = function(row, col) {
    // TODO: Check if move is valid (space is empty)
    // TODO: If move is valid, update board array with player
    // TODO: Toggle current player
};

// Returns winning player if found (X or O)
// If no winner, returns empty string
var checkForWinner = function() {
    // TODO: Check for win of rows, cols, or diagonals
    return "";
};

var CELL_SIZE = 40;
mouseClicked = function() {
    var clickedRow = Math.floor(mouseY / CELL_SIZE);
    var clickedCol = Math.floor(mouseX / CELL_SIZE);
    if (clickedRow <= 3 && clickedCol <= 3) {
        handleClick(clickedRow, clickedCol);
    }
};

draw = function() {
    background(255, 255, 255);
    stroke(0, 0, 0);

    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            var cellX = 0 + col * CELL_SIZE;
            var cellY = 0 + row * CELL_SIZE;
            fill(181, 255, 183);
            rect(cellX, cellY, CELL_SIZE, CELL_SIZE);
            fill(0, 0, 0);
            text(board[row][col], cellX + CELL_SIZE/3, cellY + CELL_SIZE/2);
        }
    }

    fill(0, 0, 0);
    var winner = checkForWinner();
    if (winner) {
        text("Winner is " + winner, 20, 160);
    } else {
        text("Current player is " + player, 20, 160);
    }
};