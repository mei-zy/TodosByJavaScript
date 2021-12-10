// 1. A를 #으로 변경
function replaceAtoSharp(str) {
  console.log(str.replace(/A/g, "#"));
}
replaceAtoSharp("BANAaNA"); // => B#N#N#
