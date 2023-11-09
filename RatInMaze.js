
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

// let arr=[ 
//     [1, 0, 0, 0, 0],
//     [1, 1, 0, 1, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0],
//     [1, 1, 1, 1, 1] ];

let arr=[
    [ 1, 0, 0, 0 ],
    [ 1, 1, 0, 1 ],
    [ 0, 1, 0, 0 ],
    [ 1, 1, 1, 1 ] 
];

let sol=[];

for(let i=0;i<arr.length;i++){
    let temp=new Array(arr[i].length).fill(0);
    sol.push(temp);
}

getResult(arr,sol,0,0);

function getResult(arr,sol,x,y){
    if(x<0 && y<0 && x>=arr.length && y>=arr.length && arr[x][y]==0)
        return false;
    if(x==arr.length-1 && y==arr.length-1 && arr[x][y]==1){
        sol[x][y]=1;
        return true;
    }   
    if(x>=0 && y>=0 && x<arr.length && y<arr.length && arr[x][y]==1){
        if(sol[x][y]==1)
            return false;
        sol[x][y]=1;
        let res=getResult(arr,sol,x+1,y)||getResult(arr,sol,x-1,y)||getResult(arr,sol,x,y+1)||getResult(arr,sol,x,y-1);
        sol[x][y]=res?1:0;
        return res;
    }
    else{
        return false;
    }
}

console.log(sol);



