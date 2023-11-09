const readline=require("readline-sync");

let str1=readline.question("Enter the String : ");

let str2=readline.question("Enter the String : ");

let arr=[];

for(let i=0;i<=str1.length;i++){
    arr.push(Array(str2.length+1).fill(0));
}

for(let i=1;i<=str1.length;i++){
    for(let j=1;j<=str2.length;j++){
        if(str1[i-1]==str2[j-1]){
            arr[i][j]=arr[i-1][j-1]+1;
        }
        else
            arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1]);
    }
}

console.log(arr);


