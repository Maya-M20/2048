const gameBoard = document.querySelector("#game-board");
const shiftLeftButton = document.querySelector("#shift-left");
const shiftRightButton = document.querySelector("#shift-right");
const shiftUpButton = document.querySelector("#shift-up");
const shiftDownButton = document.querySelector("#shift-down");

let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function createBoard() {

    for (let row = 0; row < 4; row++) {

        for (let col = 0; col < 4; col++) {
            const cell = document.createElement("div");

            cell.classList.add("cell");

            gameBoard.appendChild(cell);
        }
    }
}

function renderBoard() {

    let cells = gameBoard.children;
    let index = 0;

    for (let row = 0; row < 4; row++) {

        for (let col = 0; col < 4; col++) {

            let value = board[row][col];

            if (value === 0){
                cells[index].textContent = "";
            }
            else {
                cells[index].textContent = value;
            }

            index++;
        }
    }
}

function getEmptyCells() {
    let emptyCells = [];
    for (let row = 0; row < 4; row++){
        for (let col = 0; col < 4; col++){
            if (board[row][col] == 0){
                emptyCells.push({row: row, col: col});
            }
        }
    }
    return emptyCells;
}

function addRandomTile(){
    let emptyCells = getEmptyCells();

    if (emptyCells.length === 0) {
        return;
    }

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCell = emptyCells[randomIndex];
    let cellValue;

    if (Math.random() < 0.7){
        cellValue = 2;
    }
    else {
        cellValue = 4;
    }

    board[randomCell.row][randomCell.col] = cellValue;

    renderBoard();
}

function shiftLeft(row){
    let newRow = row.filter(item => item != 0);

    for (let i = 0; i < newRow.length - 1; i++) {
        if (newRow[i] === newRow[i + 1]) {
            newRow[i] *= 2;
            newRow.splice(i + 1, 1);
            if (i > 0){
                i--;
            };
            i--;
        }
    }

     while (newRow.length < 4) {
        newRow.push(0);
    }

    return newRow;
}

function shiftRight(row){
    return shiftLeft(row.reverse()).reverse();
}

function shiftUp(col){
    return shiftLeft(col);
}

function shiftDown(col){
    return shiftRight(col);
}

createBoard();

shiftLeftButton.addEventListener('click', () => {
    let previousBoard = board.map(row => [...row]);
    for (let row = 0; row < 4; row++){
        board[row] = shiftLeft(board[row]);
    }

    if (JSON.stringify(previousBoard) !== JSON.stringify(board)){
        addRandomTile();
    }

})

shiftRightButton.addEventListener('click', () => {
    let previousBoard = board.map(row => [...row]);
    for (let row = 0; row < 4; row++){
        board[row] = shiftRight(board[row]);
    }

    if (JSON.stringify(previousBoard) !== JSON.stringify(board)){
        addRandomTile();
    }
})

shiftUpButton.addEventListener('click', () => {
    let previousBoard = board.map(row => [...row]);
    let cols = board[0]?.length ?? 0;
    board = Array.from({ length: cols }, (_, colIndex) =>
        board.map((row) => row[colIndex])
    );

    for (let row = 0; row < 4; row++){
        board[row] = shiftLeft(board[row]);
    }

    cols = board[0]?.length ?? 0;
    board = Array.from({ length: cols }, (_, colIndex) =>
        board.map((row) => row[colIndex])
    );

    if (JSON.stringify(previousBoard) !== JSON.stringify(board)){
        addRandomTile();
    }
})

shiftDownButton.addEventListener('click', () => {
    let previousBoard = board.map(row => [...row]);
    let cols = board[0]?.length ?? 0;
    board = Array.from({ length: cols }, (_, colIndex) =>
        board.map((row) => row[colIndex])
    );

    for (let row = 0; row < 4; row++){
        board[row] = shiftRight(board[row]);
    }

    cols = board[0]?.length ?? 0;
    board = Array.from({ length: cols }, (_, colIndex) =>
        board.map((row) => row[colIndex])
    );

    if (JSON.stringify(previousBoard) !== JSON.stringify(board)){
        addRandomTile();
    }
})

let initialTile = Math.floor(Math.random() * 2);

for (let i = 0; i < initialTile + 1; i++) {
    addRandomTile();
}
renderBoard();
