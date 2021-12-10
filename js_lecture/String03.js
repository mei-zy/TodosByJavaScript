// 3. 대문자 찾기
function countUpperCase(str) {
  const regexp = /[A-Z]/g;
  console.log(str.match(regexp).length);
}
countUpperCase("KoreaTimeGood");
