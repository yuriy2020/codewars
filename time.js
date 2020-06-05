function humanReadable(seconds) {
  let sec =
    (seconds % 60).toString().length === 1
      ? "0" + (seconds % 60)
      : seconds % 60;
  let min = Math.floor((seconds % 3600) / 60).toString();
  min = min.length === 1 ? "0" + min : min;
	let h = seconds >= 3600 ? Math.floor(seconds / 3600) : "00";
	h = h.toString().length === 1 ? "0" + h : h;
  return "" + h + ":" + min + ":" + sec;
}
console.log(humanReadable(3600));
console.log(humanReadable(60));
console.log(humanReadable(3));
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(359999)); // '99:59:59'
