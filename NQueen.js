
const readline=require("readline-sync");

// let board=[],data=0;


// let len=parseInt(readline.question("Enter the length of row and column of an array : "));


// for(let i=0;i<len;i++){
//     let tempArr=[];i
//     for(let j=0;j<len;j++){
//         tempArr.push(readline.question("Enter the data : "));
//     }
//     board.push(tempArr);
// }

let board = [ [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0] ];

let N=board.length;
function isSafe(board, row, col)
{
 
    for(let i = 0; i < col; i++){
        if(board[row][i] == 1)
            return false 
    }
 
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false
 
    for (i = row, j = col; j >= 0 && i < N; i++, j--)
        if (board[i][j])
            return false
 
    return true
}
 
function solveNQUtil(board, col){
     
    if(col >= N)
        return true
 
    for(let i=0;i<N;i++){
 
        if(isSafe(board, i, col)==true){
            
            board[i][col] = 1
 
            if(solveNQUtil(board, col + 1) == true)
                return true
 
           
            board[i][col] = 0
        }
    }
    return false
}
 
solveNQUtil(board, 0);

console.log(board);

