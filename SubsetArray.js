
const readline=require("readline-sync");

// let arr=[],data=0;

// do{

//   data=parseInt(readline.question("Enter the data : "));
//   if(data>=0)
//       arr.push(data);
  
//   }while(data>=0);

let arr=[1,2,3];

  function findSubsets(subset, nums, output, index)
  {
    
      // Base Condition
      if (index == nums.length) {
          subset.push(output);
          return;
      }
    
      findSubsets(subset, nums, [...output], index + 1);
      output.push(nums[index]);
      findSubsets(subset, nums, [...output], index + 1);
  }


let subset = [];
  
findSubsets(subset, arr, [], 0);

  
console.log(subset);