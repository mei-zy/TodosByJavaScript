function formatDate(date) {
  console.log(date.toISOString().slice(0, 10));
}

formatDate(new Date("2021/07/24")); // => "2021-07-24"
formatDate(new Date("1900/1/4")); // => "1900-01-04"
