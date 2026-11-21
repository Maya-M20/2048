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

createBoard();
renderBoard();
