// var sum_pairs = function (ints, s) {
//   let arr = [];
//   for (let i = 0; i < ints.length; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if (ints[i] + ints[j] === s) {
//         arr.push(ints[i]);
//         arr.push(ints[j]);
//       }
//     }
//   }

//   return arr;
// };

var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
		console.log('>>>',seen[s - ints[i]]);
		
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sum_pairs([5, 9, 13, -3], 10)); // [13, -3]
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]

