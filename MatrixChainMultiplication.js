let arr = [1,2,3,4]
let len = arr.length;

let dp = [len].fill(-1)
for(let i=0;i<len;i++){
    dp[i] = new Array(len).fill(-1)
}
function mcm(mat,i,j){
   
    if(i==j){
        return 0;
    }
    // console.log(dp);

    dp[i][j] = Number.MAX_VALUE;

    for(let k=i;k<j;k++){
        dp[i][j] = Math.min(dp[i][j],mcm(mat,i,k) + mcm(mat,k+1,j) + (mat[i-1] * mat[k] * mat[j]));
        // console.log(dp[i][j],i,j);
    }
    return dp[i][j];
}

// console.log(dp);

console.log(mcm(arr,1,len-1));