const winBtn = document.querySelector(".winBtn");

const ticTacToe = () => {
  const cell = document.querySelectorAll("[data-cell]");
  const gameScreen = document.querySelector(".gameScreen");
  const board = document.querySelector(".gameBoard");

  let turn = "X";
  let hasWon = false;
  let itsDraw = false;
  let aiTurn = false;
  let turnsLeft = 8;
  let hasFilled = false;
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
  let indexRange = gameBoard.length - 1;

  gameScreen.style.display = "none";
  winBtn.style.display = "none";

  cell.forEach((btn) => {
    btn.addEventListener("click", () => {
      let cell = parseInt(btn.getAttribute("data-cell")) - 1;

      if (
        turn === "" ||
        (turn === "X" && btn.textContent === "" && turnsLeft > 0)
      ) {
        turn = "X";
        btn.textContent = "X";
        gameBoard[cell] = "X";
        checkDraw(gameBoard);
        checkWinner("X");
        switchTurn();
        turnsLeft--;
        aiTurn = true;
      }
      simpleAI();
    });
  });

  function simpleAI() {
    if (turnsLeft > 0) {
      ranIndex = Math.floor(Math.random() * indexRange);
       
      if (gameBoard[ranIndex] === "") {
        gameBoard[ranIndex] = "O";
        updateDisplay();
        checkDraw(gameBoard);
        checkWinner("O");
        switchTurn();
        turnsLeft--;
      } else {
        simpleAI();
      }
    }
  }

  function switchTurn() {
    if (turn === "X") {
      turn = "O";
    } else if (turn === "O") {
      turn = "X";
    }
  }

  const newGame = () => {
    gameScreen.style.display = "none";
    winBtn.style.display = "none";
    board.style.filter = "blur(0px)";
    hasWon = false;
    itsDraw = false;
    turn = "X";
    turnsLeft = 9;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    updateDisplay();
  };

  function checkDraw(arrayItem) {
    const isFilled = arrayItem.every((row) => row !== "");
    if (isFilled && !hasWon) {
      drawGame();
    }
  }

  function updateDisplay() {
    for (let i = 0; i <= indexRange; i++) {
      cell[i].textContent = gameBoard[i];
    }
  }

//   function hardMode() {
//     if (
//       (gameBoard[0] === "X" && gameBoard[1] === "X") ||
//       (gameBoard[0] === "X" && gameBoard[2] === "X") ||
//       (gameBoard[1] === "X" && gameBoard[2] === "X")
//     ) {
//       for (let i = 0; i <= 3; i++) {
//         if (gameBoard[i] === "") {
//           gameBoard[i] = "O";
//         }
//       }
//     }else{
//         simpleAI();
//     }
//   }

  // Disgusting check
  function checkWinner(checkTurn) {
    // Check Rows
    if (
      gameBoard[0] === checkTurn &&
      gameBoard[1] === checkTurn &&
      gameBoard[2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[3] === checkTurn &&
      gameBoard[4] === checkTurn &&
      gameBoard[5] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[6] === checkTurn &&
      gameBoard[7] === checkTurn &&
      gameBoard[8] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    }

    // Check Columns
    else if (
      gameBoard[0] === checkTurn &&
      gameBoard[3] === checkTurn &&
      gameBoard[6] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[1] === checkTurn &&
      gameBoard[4] === checkTurn &&
      gameBoard[7] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[2] === checkTurn &&
      gameBoard[5] === checkTurn &&
      gameBoard[8] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    }

    // Check diagonals
    else if (
      gameBoard[0] === checkTurn &&
      gameBoard[4] === checkTurn &&
      gameBoard[8] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[2] === checkTurn &&
      gameBoard[4] === checkTurn &&
      gameBoard[6] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    }
  }

  function displayWinner(checkTurn) {
    gameScreen.style.display = "block";
    winBtn.style.display = "block";
    board.style.filter = "blur(10px)";
    turnsLeft = 0;
    if (hasWon) {
      gameScreen.textContent = `${checkTurn} WINS!`;
    }
  }

  function drawGame() {
    gameScreen.style.display = "block";
    winBtn.style.display = "block";
    board.style.filter = "blur(10px)";
    gameScreen.textContent = `Its a draw!`;
  }

  return { newGame };
};

const ticTacToeGame = ticTacToe();

winBtn.addEventListener("click", ticTacToeGame.newGame);
