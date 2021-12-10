// 2. 문자 찾기 => 몇개 존재하는지
function count(str, cntstr) {
  const regexp = new RegExp(cntstr, "g");
  console.log(str.match(regexp).length);
}
count("COMPUTERPROGRAMMING", "R");
