// Basic Set up
// Determine winner
// Basic AI and Winner
// Minimax Algorithm


var board = [

    "", "", "",

    "", "", "",

    "", "", "",
]
const startingBoard = [

    "", "", "",

    "", "", "",

    "", "", "",
]
var currentPlayer = "O";
const x_player = 'X';
const o_player = 'O';

const flipPlayer = () => {
    if (currentPlayer === o_player){
        currentPlayer = x_player
    }
    else{
        currentPlayer = o_player
    }
}


const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
]

const checkWin = () => {
    let spotsFull = true;
    var winner = null;
    winCombination.forEach(element => {
        if (board[element[0]] === board[element[1]] && board[element[0]] == board[element[2]] && board[element[0]] !== ""){
            winner = board[element[0]]
            cells[element[0]].style.backgroundColor = "green";
            cells[element[1]].style.backgroundColor = "green";
            cells[element[2]].style.backgroundColor = "green";
            endGame(`${winner} Won`)
            
        }
        
    });
    
    board.forEach( element => {
        if (element === ""){
            spotsFull = false
        }
    })

    if(spotsFull && !winner){
        endGame("Game Over")
        
    }

}



const startGame = () => {
    for (var i=0; i<board.length; i++){
        board[i] = ''
    }

    document.querySelectorAll('td').forEach(element => {
        element.style.cursor = "pointer";
    })
    document.querySelector(".endgame").style.display =  "none";
    document.querySelector(".text").innerText = ""; 
    for(var i=0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false)
    }

}
const endGame = (text) =>{
    document.querySelector('.endgame').style.display = "inline";
    document.querySelector('.text').innerText = `${text}`
    
}


const turnClick = (square) => {
    if (square.target.innerText !== ''){
        return ;
    }
    square.target.innerText = currentPlayer;
    board[square.target.id]= currentPlayer;
    checkWin();
    flipPlayer();
    square.target.style.cursor = "not-allowed";
}


const cells = document.querySelectorAll(".cell");
startGame()
document.querySelector(".replayButton").onclick = () => {
    startGame();
}





