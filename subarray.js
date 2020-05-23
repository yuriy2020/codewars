//Maximum subarray sum

var maxSequence = function (arr) {
  let summ = 0,
    min = 0,
    ans = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
		min = Math.min(summ, min);
		ans = Math.max(ans,summ-min );
  }
  return ans;
};

res = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(">>>", res);
