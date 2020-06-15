// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

function formatDuration(seconds) {
  let minutes = (hours = days = years = 0);
  let time = "";
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }
  if (hours >= 24) {
    days = Math.floor(hours / 24);
    hours = hours % 24;
  }
  if (days >= 365) {
    years = Math.floor(days / 365);
    days = days % 365;
  }

  let sec = seconds === 1 ? "second" : "seconds";
  let min = minutes === 1 ? "minute" : "minutes";
  let h = hours === 1 ? "hour" : "hours";
  let d = days === 1 ? "day" : "days";
  let y = years === 1 ? "year" : "years";
  let and = "and";
  let comma = ",";
  if (hours > 0 && minutes > 0) comma = ", ";

  if (seconds !== 0) time = `${seconds} ${sec}`;
  if (seconds === 0) and = "";
	if (minutes !== 0) time = `${minutes} ${min} ${and} ${time}`;
  if (hours !== 0) time = `${hours} ${h}, ` + time;
  if (days !== 0) time = `${days} ${d}, ` + time;
  if (years !== 0) time = `${years} ${y}, ` + time;
  return time;
}

console.log(formatDuration(100000000));
console.log(formatDuration(1000000));
console.log(formatDuration(10000));
console.log(formatDuration(3601));

console.log(formatDuration(1000));
console.log(formatDuration(120));
console.log(formatDuration(10));
console.log(formatDuration(0));
