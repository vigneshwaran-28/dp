function permutations(vertex) {
	let result = [];
	const permute = (arr, m = []) => {
	  if (arr.length === 0) {
		result.push(m);
	  } else {
		for (let i = 0; i < arr.length; i++) {
		  let curr = arr.slice();
		  let next = curr.splice(i, 1);
		  permute(curr.slice(), m.concat(next));
	   }
	 }
	 return result; 
  }
	return permute(vertex); 
  }
  
   let n = 4;
  function travellingSalesman(graph, s) { 
	  let vertex = []; 
	  for (let i=0; i<n; i++) { 
		  if (i != s) { 
		  vertex.push(i); 
		  } 
	  } 
	 let min_path = Number.MAX_SAFE_INTEGER; 
	 let next_permutation=permutations(vertex); 
	 for (let i of next_permutation) { 
	   let current_pathweight=0; 
	   let k=s; 
	   for (let j of i) { 
		 current_pathweight += graph[k][j];
		  k=j; 
	  }
	   current_pathweight += graph[k][s];
		min_path=Math.min(min_path, current_pathweight);
	   }
		return min_path; 
	  }
  
  let graph=[ 
	  // [0,10,25,20],
	  // [10,0,35,25],
	  // [15,35,0,30],
	  // [20,25,30,0]
	  [0,10,15,20],
	  [5,0,9,10],
	  [6,13,0,12],
	  [8,8,9,0]
	  ];
  let s=0;
  console.log(travellingSalesman(graph, s));