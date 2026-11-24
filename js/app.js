const gameBoard = document.querySelector("#game-board");

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

function addRandomSquare(){
    let emptyCells = getEmptyCells();

    if (emptyCells.length === 0) {
        return;
    }

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCell = emptyCells[randomIndex];
    let cellValue;

    if (Math.random() < 0.5){
        cellValue = 2;
    }
    else {
        cellValue = 4;
    }

    board[randomCell.row][randomCell.col] = cellValue;

    renderBoard();
}

createBoard();

let initialSquare = Math.floor(Math.random() * 3) + 1;

for (let i = 0; i < initialSquare; i++) {
    addRandomSquare();
}
renderBoard();
