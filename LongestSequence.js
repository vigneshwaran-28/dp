
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
    [7,6,5,3,4,5 ],
    [8,2,4,2,1,8],
    [5,4,3,5,6,7 ],
    [9,8,2,1,8,0 ] ,
    [6,0,1,4,3,1],
    [3,8,8,7,6,4]  
];

let max=0;
for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr[i].length;j++){
        let temp=getResult(arr,i,j,0,-1);
        // console.log(temp," tem")
        max=(max<temp)?temp:max;
    }
}

function getResult(arr,x,y,count,curValue){
    // console.log(x,y);
    if(x<0 || y<0 || x>=arr.length || y>=arr[0].length || arr[x][y]<curValue){
        return count;
    }
       
 
    if(x>=0 && y>=0 && x<arr.length && y<arr[0].length && arr[x][y]>curValue){
      
        curValue=arr[x][y];
        count+=1;
        // console.log(count+" n : ",arr[x][y]);
        let num1=0,num2=0,num3=0,num4=0;
        num1=getResult(arr,x+1,y,count,curValue);
        num2=getResult(arr,x-1,y,count,curValue);
        num3=getResult(arr,x,y+1,count,curValue);
        num4=getResult(arr,x,y-1,count,curValue);
        // console.log(num1,num2,num3,num4," j");
        return Math.max(num1,num2,num3,num4);
    }
    else{
        // console.log("ji last ",x,y);
        return count;
    }
}

console.log(max);


