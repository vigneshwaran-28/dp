

const readline=require("readline-sync");

// let arr=[],data=0;

// do{

//   data=parseInt(readline.question("Enter the data : "));
//   if(data>=0)
//       arr.push(data);
  
//   }while(data>=0);

// let amt=parseInt(readline.question("Enter the amount : "));

let arr=[1,2,5];

let amt=5;

var change = function(amt, arr) {
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(new Array(amt+1));
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<=amt;j++){
            if(j==0)
                res[i][0]=1;
            else if(arr[i]>j){
                if(i==0)
                    res[i][j]=0;
                else
                    res[i][j]=res[i-1][j];
            }
            else{
                if(i!=0)
                    res[i][j]=res[i-1][j]+res[i][j-arr[i]];
                else
                    res[i][j]=(j%arr[i]==0)?1:0;
            }
        }
    }
    // console.log(res);
return res[arr.length-1][amt];
};

console.log(change(amt,arr));

