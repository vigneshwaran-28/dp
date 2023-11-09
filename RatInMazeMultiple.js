
const readline=require("readline-sync");

let arr=[],data=0;


let len=parseInt(readline.question("Enter the length of row and column of an array : "));


for(let i=0;i<len;i++){
    let tempArr=[];
    for(let j=0;j<len;j++){
        tempArr.push(readline.question("Enter the data : "));
    }
    arr.push(tempArr);
}

// let arr=[ 
//     [1, 0, 0, 0, 0],
//     [1, 1, 0, 1, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0],
//     [1, 1, 1, 1, 1] ];

// let arr=[
//     [ 2, 1, 0, 0 ],
//     [ 3, 0, 0, 1 ],
//     [ 0, 1, 0, 1 ],
//     [ 0, 0, 0, 1 ] 
// ];

let sol=[];

for(let i=0;i<arr.length;i++){
    let temp=new Array(arr[i].length).fill(0);
    sol.push(temp);
}

getResult(arr,sol,0,0);

function getResult(arr,sol,x,y){
    if(x<0 && y<0 && x>=arr.length && y>=arr.length && arr[x][y]==0)
        return false;
    if(x==arr.length-1 && y==arr.length-1){
        sol[x][y]=1;
        return true;
    }

    if(x>=0 && y>=0 && x<arr.length && y<arr.length && arr[x][y]!=0){
        if(sol[x][y]==1)
            return false;
        sol[x][y]=1;
      
        for(let i=1;i<=arr[x][y]&& i<arr.length;i++){
            if(getResult(arr,sol,x+i,y))
                return true;
            if(getResult(arr,sol,x,y+i))
                return true;
        }
        sol[x][y]=0;
        return false;
    }
    else{
        return false;
    }
}

console.log(sol);



