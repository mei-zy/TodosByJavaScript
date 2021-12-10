function getDay(date) {
  let day = new Date(date).getDay();
  if (day === 0) console.log("일요일");
  else if (day === 1) console.log("월요일");
  else if (day === 2) console.log("화요일");
  else if (day === 3) console.log("수요일");
  else if (day === 4) console.log("목요일");
  else if (day === 5) console.log("금요일");
  else if (day === 6) console.log("토요일");
}

getDay("2021-07-24"); // => '토요일'
getDay("2021-07-25"); // => '일요일'
getDay("2021-07-26"); // => '월요일'
