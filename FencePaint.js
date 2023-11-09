let n=3,k=3;

console.log(getRes());

function getRes(){
    if(n==0)
        return 0;
    if(n==1)
        return k;
        let same = 0, diff = k;
        for (let i = 2; i <= n; ++i) {
            let t = diff;
            diff = (same + diff) * (k - 1);
            same = t;
        }
        return same + diff;
}



