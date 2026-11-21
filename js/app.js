const gameBoard = document.querySelector("#game-board");

function createBoard() {

    for (let row = 0; row < 4; row++) {

        for (let col = 0; col < 4; col++) {
            const cell = document.createElement("div");

            cell.classList.add("cell");

            gameBoard.appendChild(cell);
        }
    }
}

createBoard();
