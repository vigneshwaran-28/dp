
const readline=require("readline-sync");

let arr=[],data=0;

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>=0)
      arr.push(data);
  
  }while(data>=0);

  let dp=[];
  dp[0]=arr[0];
  dp[1]=Math.max(arr[0],arr[1]);

  for(let i=2;i<arr.length;i++){
    dp[i]=Math.max(arr[i]+dp[i-2],dp[i-1]);
  }

  console.log(dp[dp.length-1]);
  
