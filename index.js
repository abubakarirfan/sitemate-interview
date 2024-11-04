// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  const [hourString, minString] = time.split(':');

  let hour = Number(hourString);
  let min = Number(minString);

  const hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
  const minutes = ["", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "quarter",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
    "twenty-one", "twenty-two", "twenty-three", "twenty-four",
    "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "half"]


  if (hour === 0 && min === 0) {
    return 'midnight';
  }
  if (time === 12 && min === 0) {
    return "midday";
  }

  let result = '';

  if (min === 0) {
    result = `${hours[hour]} o'clock`;
  } else if (hour > 12) {
    result = `${hours[hour - 12]} o'clock`;
  }
  else if (min <= 30) {
    result = `${minutes[min]} past ${hours[hour]}`
  } else if (hour > 12) {
    result = `${hours[hour - 12]} past ${hours[hour]}`;
  } else {
    result = `${minutes[60 - min]} to ${hours[hour + 1]}`
  }

  return result;
}

module.exports = { convertTimeToWords };