
const readline=require("readline-sync");

let nums=[],data=0;

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>=0)
      nums.push(data);
  
  }while(data>=0);


  const len = nums.length;
    if (len < 4) 
        return Math.max(...nums);
    
    function robberHelper(start, end) {
        let prev=0, beforePrev=0;
        for (let i=start;i<end;i++) {
            let tmp = prev;
            prev = Math.max(nums[i] + beforePrev, prev);
            beforePrev= tmp;
        }
        return prev;
    }
    let res= Math.max(robberHelper(0, len-1), robberHelper(1, len));

    console.log(res);


