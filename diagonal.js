function sum(matrix) {
  let sum=0;
  const len = matrix.length-1
  for(let i=0, j=len; i<len+1;i++, j--){
   sum+=matrix[i][i]
   sum+= matrix[i][j]
  }
  return sum
}

console.log(sum([[1,2,3], [4,5,6], [7,8,9]]))