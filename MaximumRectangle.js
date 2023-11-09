
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
let arr = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]];

console.log(maximalRectangle(arr));

function maximalRectangle(arr) {
    let res=0;
    let resArr=[];
    for(let i=0;i<arr.length;i++){
        resArr.push(Array(arr[0].length).fill(0));
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i==0)
                resArr[i][j]=parseInt(arr[i][j]);
            else{
                if(arr[i][j]==0)
                    resArr[i][j]=0;
                else
                    resArr[i][j]=parseInt(resArr[i-1][j])+parseInt(arr[i][j]);
            }

        }
    }
  for(let i of resArr){
      res=Math.max(res,largestRectangleArea(i))
  }
// console.log("es",resArr);
function largestRectangleArea (arr) {
    
let mystack=[],left=[],right=[];

  for(let i=0;i<arr.length;++i)
        {
            if(mystack.length==0)
            {    left[i] = 0;   mystack.push(i);    }
            else
            {
                while(!mystack.length==0 && arr[mystack[mystack.length-1]]>=arr[i])
                    mystack.pop();
                left[i] = mystack.length==0?0:mystack[mystack.length-1]+1;
                mystack.push(i);
            }
        }
        while(!mystack.length==0) 
            mystack.pop();
        
        for(let i=arr.length-1;i>=0;--i) 
        {
            if(mystack.length==0)
            {   right[i] = arr.length-1; mystack.push(i);    }
            else
            {
                while(!mystack.length==0 && arr[mystack[mystack.length-1]]>=arr[i])
                    mystack.pop();
                right[i] = mystack.length==0?arr.length-1:mystack[mystack.length-1]-1;
                mystack.push(i);
            }
        }
        let mx_area = 0;    //Stores max_area
        for(let i=0;i<arr.length;++i)
            mx_area = Math.max(mx_area,arr[i]*(right[i]-left[i]+1));
    return mx_area;
};
return res;
};