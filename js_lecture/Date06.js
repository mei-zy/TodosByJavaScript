function diffDays(today, fromday) {
  const day = today.getTime() - fromday.getTime();
  const elapsedDay = day / 1000 / 60 / 60 / 24;
  console.log(Math.abs(elapsedDay));
}
diffDays(new Date("2021/01/01"), new Date("2021/12/31")); // => 364
