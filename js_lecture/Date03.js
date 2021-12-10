function getLastDateOfMonth(year, month) {
  let last = new Date(year, month + 1, 0).getDate();
  console.log(last);
}

// 2021년 1월의 마지막 날은 31일
getLastDateOfMonth(2021, 0); // => 31
// 2021년 2월의 마지막 날은 28일
getLastDateOfMonth(2021, 1); // => 28
