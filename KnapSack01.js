

const readline=require("readline-sync");
 
// let n=parseInt(readline.question("Enter the length : "));

// let capacity=parseInt(readline.question("Enter the capacity : "));

// console.log("Enter the weights of an array : ");

// let weight=[];

// for(let i=0;i<n;i++){
//     arr.push(parseInt(readline.question("Enter the data : ")));
// }


// console.log("Enter the Profits of an array : ");

// let profit=[];

// for(let i=0;i<n;i++){
//     arr.push(parseInt(readline.question("Enter the data : ")));
// }




let weight=[4,5,6],n=3,capacity=10,profits=[1,2,3];

// function selectionSort() {
//     for (let i = 0; i < arr.length-1; i++) {
//       let lowest = i
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[lowest]) {
//           lowest = j
//         }
//       }
//       if (lowest !== i) {
//         [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//       }
//     }
//   }



let knap = [];
for(let i=0;i<=profits.length;i++){
    knap.push(Array(capacity+1).fill(0))   
}
for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
        if (i == 0 || w == 0) {
            knap[i][w] = 0;
        } else if (weight[i - 1] <= w) {
            knap[i][w] = Math.max(knap[i - 1][w], knap[i - 1][w - weight[i - 1]] + profits[i - 1]);
        } else {
            knap[i][w] = knap[i - 1][w];
        }
    }
}
let max = knap[n][capacity];
let count=n;
let res=new Array(n).fill(0);
while(max!=0){
    if(knap[count].includes(max) && (!knap[count-1].includes(max))){
        res[count-1]=1;
        max-=profits[count-1];
    }
    count--;
}

console.log(res);
// console.log(knap[n][capacity]);


