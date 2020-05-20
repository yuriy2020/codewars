snail = function (array) {
  let newArr = [...array];
  let snailArr = [];
  foo(newArr);
  function foo(newArr) {
    if (newArr.length === 0) {
      return snailArr;
    } else {
      snailArr.push(...newArr[0]);
      newArr.splice(0, 1);
      newArr.map((item) => {
        let ret = snailArr.push(item[item.length - 1]);
        item.splice(-1, 1);
        return ret;
      });
      if (newArr.length === 0) return snailArr;
      snailArr.push(...[...newArr[newArr.length - 1]].reverse());
      newArr.splice(-1, 1);
      snailArr.push(...[...newArr].map((el) => el[0]).reverse());
      newArr.map((el) => el.splice(0, 1));
      return foo(newArr);
    }
  }

  return snailArr;
};

console.log(
  ">>3x3",
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//[1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log(
  ">>>5x5",
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);

// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

console.log(
  "6Arr>>>",
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
