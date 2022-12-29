const winBtn = document.querySelector(".winBtn");

const ticTacToe = () => {
  const cell = document.querySelectorAll("[data-cell]");
  const gameScreen = document.querySelector(".gameScreen");
  const board = document.querySelector(".gameBoard");

  let turn = "X";
  let hasWon = false;
  let itsDraw = false;
  let aiTurn = false;
  let aiCol = Math.ceil(Math.random() * 3);
  let aiRow = Math.ceil(Math.random() * 3);

  gameScreen.style.display = "none";
  winBtn.style.display = "none";

  cell.forEach((btn) => {
    btn.addEventListener("click", () => {
      let cellRow = parseInt(btn.getAttribute("data-row"));
      let cellColumn = parseInt(btn.getAttribute("data-column"));

      if (turn === "" || (turn === "X" && btn.textContent === "")) {
        turn = "X";
        btn.textContent = "X";
        gameBoard[cellRow][cellColumn] = "X";
        checkDraw(gameBoard);
        checkWinner("X");
        switchTurn();
        aiTurn = true;
      } // else if (turn === "O" && btn.textContent === "") {
      //   btn.textContent = "O";
      //   gameBoard[cellRow][cellColumn] = "O";
      //   checkDraw(gameBoard);
      //   checkWinner("O");
      //   switchTurn();
      // }
      myAI();
    });
  });

  let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let simpleGameBoard = ["", "", "", "", "", "", "", "", ""];

  function simpleAI() {
    let indexRange = playboard.length - 1;

    let hasFilled = false;

    function fillRandom() {
      ranIndex = Math.floor(Math.random() * indexRange);
      console.log(ranIndex);

      if (playboard[ranIndex] === "") {
        console.log(`Filling up the slot: ${ranIndex}`);
        playboard[ranIndex] = "X";
      } else {
        fillRandom();
      }
      console.log(playboard);
    }
  }

  function myAI() {
    if (aiTurn) {
      aiCol = Math.floor(Math.random() * 3);
      aiRow = Math.floor(Math.random() * 3);

      if (gameBoard[aiRow][aiCol] === "") {
        console.log("empty");
        gameBoard[aiRow][aiCol] = "O";
        aiTurn = false;
      } else {
        myAI();
      }
    }
    updateDisplay();
    checkDraw(gameBoard);
    checkWinner("O");
    switchTurn();
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
    gameBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    updateDisplay();
  };

  function checkDraw(arrayItem) {
    const isFilled = arrayItem.every((row) => row.every((cell) => cell !== ""));

    if (isFilled && !hasWon) {
      console.log("DRAW!");
      drawGame();
    } else {
      console.log("Has empty spaces");
    }
  }

  function updateDisplay() {
    let cellNum = 0;

    gameBoard.forEach((row) => {
      row.forEach((column) => {
        cell[cellNum].textContent = column;
        cellNum++;
      });
    });
  }

  function checkWinner(checkTurn) {
    // Check rows
    if (
      gameBoard[0][0] === checkTurn &&
      gameBoard[0][1] === checkTurn &&
      gameBoard[0][2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[1][0] === checkTurn &&
      gameBoard[1][1] === checkTurn &&
      gameBoard[1][2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[2][0] === checkTurn &&
      gameBoard[2][1] === checkTurn &&
      gameBoard[2][2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    }
    // Check columns
    else if (
      gameBoard[0][0] === checkTurn &&
      gameBoard[1][0] === checkTurn &&
      gameBoard[2][0] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[0][1] === checkTurn &&
      gameBoard[1][1] === checkTurn &&
      gameBoard[2][1] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[0][2] === checkTurn &&
      gameBoard[1][2] === checkTurn &&
      gameBoard[2][2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    }
    // Check diagonals
    else if (
      gameBoard[0][0] === checkTurn &&
      gameBoard[1][1] === checkTurn &&
      gameBoard[2][2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    } else if (
      gameBoard[2][0] === checkTurn &&
      gameBoard[1][1] === checkTurn &&
      gameBoard[0][2] === checkTurn
    ) {
      hasWon = true;
      displayWinner(checkTurn);
    }
  }

  function displayWinner(checkTurn) {
    gameScreen.style.display = "block";
    winBtn.style.display = "block";
    board.style.filter = "blur(10px)";

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
