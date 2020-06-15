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

  let sec = seconds === 1 ? "second" : "seconds";
  let min = minutes === 1 ? "minute" : "minutes";
  let h = hours === 1 ? "hour" : "hours";
  let d = days === 1 ? "day" : "days";
  time = `${days} ${d} ${hours} ${h} ${minutes} ${min} ${seconds} ${sec}`;
  return time;
}

console.log(formatDuration(10000000)); //, "1 minute and 2 seconds"););
