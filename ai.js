let gameBoard = ["", "", "", "", "", "", "", "", ""];
let indexRange = gameBoard.length -1;

let hasFilled = false;

function fillRandom(){
    ranIndex = Math.floor(Math.random() * indexRange);
    console.log(ranIndex);

    if(gameBoard[ranIndex] === ""){
        console.log(`Filling up the slot: ${ranIndex}`);
        gameBoard[ranIndex] = "X";
    }
    else{
        fillRandom();
    }
    console.log(gameBoard);
}

