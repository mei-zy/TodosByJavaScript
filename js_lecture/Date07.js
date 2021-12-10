function isEqualDate(date1, date2) {
  if (date1.toDateString() === date2.toDateString()) return true;
  else return false;
}

isEqualDate(new Date("2021/07/24"), new Date("2021/07/24")); // => true
isEqualDate(new Date("2021/07/24"), new Date("2022/07/2")); // => false
