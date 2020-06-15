// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

function formatDuration(seconds) {
  let minutes = (hours = days = years = 0);
  let time = "";
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    time = `${minutes} minutes and ${seconds} seconds`;
  } else {
    time += `${seconds} seconds`;
  }
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
		minutes = (minutes % 60);
    time = `${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  return time;
}

console.log(formatDuration(62)); //, "1 minute and 2 seconds"););
