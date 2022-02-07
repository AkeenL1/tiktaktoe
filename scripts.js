const gameBoard = (function()
{
   let board = [
       ["","",""],
       ["","",""],
       ["","",""]
   ];
   function getBoard()
   {
    return board;
   }
   function createBoard()
   {
        board = [
            ["","",""],
            ["","",""],
            ["","",""]
        ];
        return board
   }
   return{getBoard,createBoard};
})();
let xScore = 0;
let yScore = 0;
const xWins = document.getElementById("xWinner");
xWins.addEventListener("click",function()
{
    xWins.style.display = "none";
    display.displayBoard();
});

const oWins = document.getElementById("oWinner");
oWins.addEventListener("click",function()
{
    oWins.style.display = "none";
    display.displayBoard();
});

const draw = document.getElementById("draw");
draw.addEventListener("click",function()
{
    draw.style.display = "none";
    display.displayBoard();
});
const display = (function()
{
    const displayBoard = function()
    {
        // rewrite logic here as for loop
        const board = gameBoard.getBoard();

        const uLeft = document.getElementById("uLeft");
        uLeft.innerHTML = board[0][0];

        const uMid = document.getElementById("uMid");
        uMid.innerHTML = board[0][1];

        const uRight = document.getElementById("uRight");
        uRight.innerHTML = board[0][2];

        const mLeft = document.getElementById("mLeft");
        mLeft.innerHTML = board[1][0];

        const mMid = document.getElementById("mMid");
        mMid.innerHTML = board[1][1];

        const mRight = document.getElementById("mRight");
        mRight.innerHTML = board[1][2];

        const bLeft = document.getElementById("bLeft");
        bLeft.innerHTML = board[2][0];

        const bMid = document.getElementById("bMid");
        bMid.innerHTML = board[2][1];

        const bRight = document.getElementById("bRight");
        bRight.innerHTML = board[2][2];

        let score = document.getElementById("xScoreNumber");
        score.innerHTML = xScore;

        score = document.getElementById("oScoreNumber");
        score.innerHTML = yScore;

    }
    return{displayBoard}
})();
display.displayBoard();
const player = function(a)
{
    var letter = "X";
    if(a%2!=0)
    {
        letter = "O";
    }
    this.letter = letter;
    return;
}
const play = (function()
{
    var board = gameBoard.getBoard();
    const player1 = new player(0);
    const player2 = new player(1);
    const box = document.getElementsByClassName("box");
    console.log(player1.letter)
    var player1Turn = new Boolean(true);
    var uLeft = new Boolean(true);
    var moveCount = 0;
    for(var i = 0;i<box.length;i++)
    {
        box[i].addEventListener("click",function()
        {
            switch(this.id)
            {
                case 'uLeft':
                    if(uLeft)
                    {
                        if(player1Turn)
                        {
                            board[0][0] = player1.letter;  
                        }
                        else
                        {
                            board[0][0] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        uLeft = !uLeft;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'uMid':
                    if(uMid)
                    {
                        if(player1Turn)
                        {
                            board[0][1] = player1.letter;  
                        }
                        else
                        {
                            board[0][1] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        uMid = !uMid;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'uRight':
                    if(uRight)
                    {
                        if(player1Turn)
                        {
                            board[0][2] = player1.letter;  
                        }
                        else
                        {
                            board[0][2] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        uRight = !uRight;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'mLeft':
                    if(mLeft)
                    {
                        if(player1Turn)
                        {
                            board[1][0] = player1.letter;  
                        }
                        else
                        {
                            board[1][0] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        mLeft = !mLeft;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'mMid':
                    if(mMid)
                    {
                        if(player1Turn)
                        {
                            board[1][1] = player1.letter;  
                        }
                        else
                        {
                            board[1][1] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        mMid = !mMid;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'mRight':
                    if(mRight)
                    {
                        if(player1Turn)
                        {
                            board[1][2] = player1.letter;  
                        }
                        else
                        {
                            board[1][2] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        mRight = !mRight;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'bLeft':
                    if(bLeft)
                    {
                        if(player1Turn)
                        {
                            board[2][0] = player1.letter;  
                        }
                        else
                        {
                            board[2][0] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        bLeft = !bLeft;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'bMid':
                    if(bMid)
                    {
                        if(player1Turn)
                        {
                            board[2][1] = player1.letter;  
                        }
                        else
                        {
                            board[2][1] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        bMid = !bMid;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                case 'bRight':
                    if(bRight)
                    {
                        if(player1Turn)
                        {
                            board[2][2] = player1.letter;  
                        }
                        else
                        {
                            board[2][2] = player2.letter;
                        }
                        player1Turn = !player1Turn;
                        bRight = !bRight;
                        moveCount++;
                    }
                    display.displayBoard();
                    break;
                default:
                    display.displayBoard();
                    break;
            } 
            //check winner function  
            if(checkWinner(board,moveCount,player1,player2) == player1.letter)
            {
                board = gameBoard.createBoard();
                moveCount = 0;
                xScore++;
                xWins.style.display = "block"
                uLeft = new Boolean(false);
                uMid = new Boolean(false);
                uRight = new Boolean(false);
                mLeft = new Boolean(false);
                mMid = new Boolean(false);
                mRight = new Boolean(false);
                bLeft = new Boolean(false);
                bMid = new Boolean(false);
                bRight = new Boolean(false);
                player1Turn = new Boolean(true);
                
            }
            else if(checkWinner(board,moveCount,player1,player2) == player2.letter)
            {
                board = gameBoard.createBoard();
                moveCount = 0;
                yScore++;
                oWins.style.display = "block";
                uLeft = new Boolean(false);
                uMid = new Boolean(false);
                uRight = new Boolean(false);
                mLeft = new Boolean(false);
                mMid = new Boolean(false);
                mRight = new Boolean(false);
                bLeft = new Boolean(false);
                bMid = new Boolean(false);
                bRight = new Boolean(false);
                player1Turn = new Boolean(true);
                
            }
            else if(checkWinner(board,moveCount,player1,player2) == "d")
            {
                board = gameBoard.createBoard();
                moveCount = 0;
                draw.style.display = "block";
                uLeft = new Boolean(false);
                uMid = new Boolean(false);
                uRight = new Boolean(false);
                mLeft = new Boolean(false);
                mMid = new Boolean(false);
                mRight = new Boolean(false);
                bLeft = new Boolean(false);
                bMid = new Boolean(false);
                bRight = new Boolean(false);
                player1Turn = new Boolean(true);
            }
        });
    }
    return{};
}
)();


function checkWinner(board,moves,player1,player2)
{
    for(var i = 0;i<3;i++)
    {
        if(board[i][0]===board[i][1] && board[i][1]===board[i][2]&&board[i][2]===player1.letter)
        {
            return player1.letter;
        }
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][2]==player2.letter)
        {
            return player2.letter;
        }
        if(board[0][i]==board[1][i]&& board[1][i]==board[2][i]&&board[2][i]==player1.letter)
        {
            return player1.letter;
        }
        if(board[0][i]==board[1][i]&&board[0][i]==board[2][i]&&board[2][i]==player2.letter)
        {
            return player2.letter;
        }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] &&board[2][2]  == player1.letter)
    {
        return player1.letter
    }
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] &&board[2][2]  == player2.letter)
    {
        return player2.letter
    }
    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] == player1.letter)
    {
        return player1.letter
    }
    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] == player2.letter)
    {
        return player2.letter
    }
    if(moves == 9)
    {
        return "d";
    }
}

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click",function()
{
    yScore = 0;
    xScore = 0;
    const gboard = gameBoard.getBoard();
    for(let i = 0;i<3;i++)
    {
        for(let j = 0;j<3;j++)
        {
            gboard[i][j] = "";
        }
    }
    display.displayBoard();
})


