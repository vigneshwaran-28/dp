

const readline=require("readline-sync");

// let arr=[],data=0;


// let len=parseInt(readline.question("Enter the length of row and column of an array : "));


// for(let i=0;i<len;i++){
//     let tempArr=[];
//     for(let j=0;j<len;j++){
//         tempArr.push(readline.question("Enter the data : "));
//     }
//     arr.push(tempArr);
// }

 board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]


var solveSudoku = function(board) {
    
    for(let i=0; i<board.length ; i++){
        
        for(let j=0; j<board[0].length; j++){
            
            if(board[i][j] === '.'){
                
                for(let k=1; k<=9 ; k++){
                    
                    const num = k.toString()
                    if(isNumValid(i,j,num,board)){
                        
                        board[i][j] = num
               
                        
                        if(solveSudoku(board) === true){
                            return true
                        }else{
                            board[i][j] = '.'
                        }
                        
                    }
                }
                return false
            }
            
            
        }
    }
                return true

};

function isNumValid(row, col, num, board){
    for(let i=0 ; i<9 ; i++){
        
        if(board[row][i] === num) return false
        
        if(board[i][col] === num) return false
        
        const currentMatrixRow = Math.floor(row/3)*3;       
        const currentMatrixCol = Math.floor(col/3)*3;

        const currentRow =  currentMatrixRow + Math.floor(i/3)        
        const currentCol = currentMatrixCol + i%3 
 
        
        if(board[currentRow][currentCol] === num ) return false
        
    }
            return true
            }


 if(solveSudoku(board))
 console.log(board)