const playCells = document.querySelectorAll(".cells");
const cell = document.querySelectorAll("[data-cell]");
const gameScreen = document.querySelector(".gameScreen");
const board = document.querySelector(".gameBoard");
const winBtn = document.querySelector(".winBtn");

let turn = "";

gameScreen.style.display = "none"; 
winBtn.style.display = "none"; 


const ticTacToe = {

  
}


cell.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cellValue = btn.getAttribute("data-cell");
    let cellRow = parseInt(btn.getAttribute("data-row"));
    let cellColumn = parseInt(btn.getAttribute("data-column"));

    if (turn === "" || (turn === "X" && btn.textContent === "")) {
      turn = "X";
      btn.textContent = "X";
      gameBoard[cellRow][cellColumn] = "X";
      checkWinner("X");
      turn = "O";
    } else if (turn === "O" && btn.textContent === "") {
      btn.textContent = "O";
      gameBoard[cellRow][cellColumn] = "O";
      checkWinner("O");
      console.log(checkWinner === true);

      turn = "X";
    }
  });
});

let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


function newGame(){
  gameScreen.style.display = "none"; 
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  updateDisplay();
}


function updateDisplay(){
    let cellNum = 0;

    gameBoard.forEach(row => {
        row.forEach(column => {            
            cell[cellNum].textContent = column;
            cellNum++;
        })
    })
}

function checkWinner(checkTurn) {
    // Check rows
    if ((gameBoard[0][0] === checkTurn) && (gameBoard[0][1] === checkTurn) && (gameBoard[0][2] === checkTurn)) {
      displayWinner(checkTurn);
    } else if (gameBoard[1][0] === checkTurn && gameBoard[1][1] === checkTurn && gameBoard[1][2] === checkTurn) {
      displayWinner(checkTurn);
    } else if (gameBoard[2][0] === checkTurn && gameBoard[2][1] === checkTurn && gameBoard[2][2] === checkTurn) {
      displayWinner(checkTurn);
    }
    // Check columns
    else if (gameBoard[0][0] === checkTurn && gameBoard[1][0] === checkTurn && gameBoard[2][0] === checkTurn) {
      displayWinner(checkTurn);
    } else if (gameBoard[0][1] === checkTurn && gameBoard[1][1] === checkTurn && gameBoard[2][1] === checkTurn) {
      displayWinner(checkTurn);
    } else if (gameBoard[0][2] === checkTurn && gameBoard[1][2] === checkTurn && gameBoard[2][2] === checkTurn) {
      displayWinner(checkTurn);
    }
    // Check diagonals
    else if (gameBoard[0][0] === checkTurn && gameBoard[1][1] === checkTurn && gameBoard[2][2] === checkTurn) {
      displayWinner(checkTurn);
    } else if (gameBoard[2][0] === checkTurn && gameBoard[1][1] === checkTurn && gameBoard[0][2] === checkTurn) {
      displayWinner(checkTurn);
    }
  }

function displayWinner(checkTurn){
  gameScreen.style.display = "block";
  winBtn.style.display = "block";
  gameScreen.textContent = `${checkTurn} WINS!`;
  board.style.filter = "blur(10px)";
}